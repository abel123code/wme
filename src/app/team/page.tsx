// Server Component: Renders static content on the server
// This reduces initial JS bundle size and improves performance
import PageHero from "@/components/PageHero";
import TeamSection from "./TeamSection";
import { teamMembers } from "@/data/teamData";

export default function TeamPage() {
  return (
    <main className="relative bg-white">
      <PageHero
        title="Our Team"
        image="/team/our-team.JPG"
        imageAlt="Team hero background"
      />

      {/* Client Component handles all interactive state and modal rendering */}
      <TeamSection teamMembers={teamMembers} />
    </main>
  );
}
