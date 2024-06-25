export const links = [
  {
    name: "home",
    hash: "/",
  },
  {
    name: "about",
    hash: "#about",
  },
  {
    name: "projects",
    hash: "#projects",
  },
  {
    name: "contact",
    hash: "#contact",
  },
] as const;

export const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "firebase",
  "vercel",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "androidstudio",
  // "dart",
  // "flutter",
  // "prisma",
  // "amazonaws",
  // "postgresql",
  // "nginx",
  // "testinglibrary",
  // "jest",
  // "cypress",
  // "jira",
  // "gitlab",
  // "sonarqube",
  // "figma",
];

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
}

export const projectsData: Project[] = [
  {
    title: "GoMeetUp",
    description: "Audio & Video meeting/ conferencing Fullstack Website.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Clerk",
      "Stream-io",
      "TailwindCss",
      "Shadcn",
    ],
    imageUrl: "/GoMeetUp.png",
  },
];
