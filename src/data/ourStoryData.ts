export interface TimelineHighlight {
  value: string;
  label: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  tag: string;
  description: string;
  highlights: TimelineHighlight[];
}

export const timelineItems: TimelineItem[] = [
  {
    year: "2018",
    title: "The Beginning",
    tag: "Foundation",
    description:
      "Wondrous Mind was founded by Ms Nicky, who began teaching Science from home with a passion for helping students learn with clarity and confidence. As her number of students grew, she was joined by her sister, Ms Caroline, who leads the Mathematics programme. Together, they built Wondrous Mind into a trusted learning space dedicated to student success.",
    highlights: [
      { value: "10+", label: "Students" },
      { value: "Home", label: "Studio" },
    ],
  },
  {
    year: "2019",
    title: "First Centre",
    tag: "First Milestone",
    description:
      "As more students joined, their home soon became too small to hold everyone. With a shared belief in their vision, they took a leap of faith and opened their first centre at Jalan Jurong Kechil, marking a meaningful milestone in Wondrous Mind's journey.",
    highlights: [
      { value: "1st", label: "Centre" },
      { value: "30+", label: "Students" },
    ],
  },
  {
    year: "2021",
    title: "A New Home",
    tag: "A Bigger Vision",
    description:
      "The centre continued to grow, and with strong support from parents and students, they moved into a larger space at Bukit Timah Plaza. It was an exciting new chapter as the Wondrous Mind team expanded alongside the centre.",
    highlights: [
      { value: "Bukit Timah", label: "Location" },
      { value: "50+", label: "Students" },
    ],
  },
  {
    year: "2024",
    title: "Expanding Horizons",
    tag: "Growing Together",
    description:
      "In 2024, they took another leap of faith when the neighbouring unit became available. Expanding into the new space, the centre grew bigger, allowing more classes for more students and continuing their mission to nurture every child's potential.",
    highlights: [
      { value: "2x", label: "Space" },
      { value: "100+", label: "Students" },
    ],
  },
];
