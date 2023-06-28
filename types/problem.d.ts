type Problem = {
  title: string;
  description: string;
  bg: string;
  stats: {
    chapter: number;
    items: number;
    percent: string;
  };
  type: "interview" | "learning";
  featured: boolean;
};
