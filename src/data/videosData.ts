// Testimonials videos data extracted to separate file
// This improves dev compile time by reducing the amount of code that needs to be recompiled
export interface Video {
  title: string;
  videoId: string;
}

export const videos: Video[] = [
  {
    title: "Busting Study Myths",
    videoId: "7495232386288995602", // From https://vt.tiktok.com/ZSPE2C8B1/
  },
  {
    title: "Study Tip",
    videoId: "7474145532521303303", // From https://vt.tiktok.com/ZSPE29fJf/
  },
  {
    title: "Opening Our New Units",
    videoId: "7455973754703760648", // From https://vt.tiktok.com/ZSPE2m5Gt/
  },
];

