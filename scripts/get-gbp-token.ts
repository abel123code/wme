/**
 * Google Business Profile OAuth Token Script
 * 
 * This script helps you obtain a refresh token for the Google Business Profile API.
 * 
 * PREREQUISITES:
 * 1. Go to Google Cloud Console → APIs & Services → Credentials
 * 2. Create OAuth 2.0 Client ID (choose "Desktop app" type)
 * 3. Enable these APIs:
 *    - My Business Account Management API
 *    - My Business Business Information API
 * 
 * USAGE:
 * 1. Create .env with:
 *    GOOGLE_CLIENT_ID=your_client_id
 *    GOOGLE_CLIENT_SECRET=your_client_secret
 * 
 * 2. Run: npm run get-gbp-token
 * 
 * 3. A browser will open - sign in and authorize
 * 
 * 4. Copy the refresh_token to .env:
 *    GOOGLE_REFRESH_TOKEN=your_refresh_token
 */

import { OAuth2Client } from 'google-auth-library';
import * as http from 'http';
import * as url from 'url';
import * as dotenv from 'dotenv';
import * as path from 'path';
import { exec } from 'child_process';

// Load .env
dotenv.config({ path: path.join(process.cwd(), '.env') });

const SCOPES = ['https://www.googleapis.com/auth/business.manage'];
const PORT = 3333;
const REDIRECT_URI = `http://localhost:${PORT}/callback`;

// Open URL in default browser
function openBrowser(urlToOpen: string) {
  const command = process.platform === 'win32' 
    ? `start "" "${urlToOpen}"` 
    : process.platform === 'darwin' 
      ? `open "${urlToOpen}"` 
      : `xdg-open "${urlToOpen}"`;
  
  exec(command, (err) => {
    if (err) {
      console.log('\n⚠️  Could not open browser automatically.');
      console.log('Please open this URL manually:\n');
      console.log(urlToOpen);
    }
  });
}

async function getRefreshToken() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    console.error('\n❌ Error: Missing credentials!');
    console.error('Please set GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET in .env\n');
    console.error('Example .env:');
    console.error('  GOOGLE_CLIENT_ID=your_client_id_here');
    console.error('  GOOGLE_CLIENT_SECRET=your_client_secret_here\n');
    process.exit(1);
  }

  const oauth2Client = new OAuth2Client(clientId, clientSecret, REDIRECT_URI);

  // Generate authorization URL
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    prompt: 'consent',
    scope: SCOPES,
  });

  console.log('\n===========================================');
  console.log('  Google Business Profile OAuth Setup');
  console.log('===========================================\n');

  // Create a temporary HTTP server to receive the callback
  return new Promise<void>((resolve, reject) => {
    const server = http.createServer(async (req, res) => {
      try {
        const queryParams = url.parse(req.url || '', true).query;
        
        if (queryParams.error) {
          res.writeHead(400, { 'Content-Type': 'text/html' });
          res.end(`
            <html>
              <body style="font-family: system-ui; padding: 40px; text-align: center;">
                <h1>❌ Authorization Failed</h1>
                <p>Error: ${queryParams.error}</p>
                <p>You can close this window.</p>
              </body>
            </html>
          `);
          console.error('\n❌ Authorization failed:', queryParams.error);
          server.close();
          reject(new Error(queryParams.error as string));
          return;
        }

        const code = queryParams.code as string;
        if (!code) {
          return; // Ignore requests without code (like favicon)
        }

        console.log('⏳ Received authorization code, exchanging for tokens...');

        const { tokens } = await oauth2Client.getToken(code);

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
          <html>
            <body style="font-family: system-ui; padding: 40px; text-align: center;">
              <h1>✅ Authorization Successful!</h1>
              <p>You can close this window and return to the terminal.</p>
            </body>
          </html>
        `);

        console.log('\n✅ Success! Here are your tokens:\n');
        console.log('===========================================');
        
        if (tokens.refresh_token) {
          console.log('REFRESH TOKEN:');
          console.log(tokens.refresh_token);
          console.log('===========================================\n');
          console.log('📝 Add this to your .env file:\n');
          console.log(`GOOGLE_REFRESH_TOKEN=${tokens.refresh_token}\n`);
          console.log('Then restart your Next.js dev server and visit /api/gbp/sync');
        } else {
          console.log('⚠️  No refresh token returned.');
          console.log('ACCESS TOKEN (temporary):');
          console.log(tokens.access_token);
          console.log('===========================================\n');
          console.log('To get a refresh token:');
          console.log('1. Go to https://myaccount.google.com/permissions');
          console.log('2. Find and remove access for your app');
          console.log('3. Run this script again\n');
        }

        server.close();
        resolve();

      } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end(`
          <html>
            <body style="font-family: system-ui; padding: 40px; text-align: center;">
              <h1>❌ Error</h1>
              <p>${error instanceof Error ? error.message : 'Unknown error'}</p>
              <p>Check the terminal for details.</p>
            </body>
          </html>
        `);
        console.error('\n❌ Error:', error);
        server.close();
        reject(error);
      }
    });

    server.listen(PORT, () => {
      console.log(`📡 Listening on http://localhost:${PORT}`);
      console.log('\n🌐 Opening browser for authorization...\n');
      console.log('If browser doesn\'t open, visit this URL:\n');
      console.log(authUrl);
      console.log('\n⏳ Waiting for authorization...\n');
      
      openBrowser(authUrl);
    });

    server.on('error', (err) => {
      console.error('\n❌ Server error:', err.message);
      if ((err as NodeJS.ErrnoException).code === 'EADDRINUSE') {
        console.error(`Port ${PORT} is already in use. Please close other applications using this port.`);
      }
      reject(err);
    });
  });
}

getRefreshToken().catch((err) => {
  console.error('Failed:', err.message);
  process.exit(1);
});
