export interface Project {
  id: number;
  banner: string;
  logo: string;
  title: string;
  description: string;
  links: {
    demo?: string;
    blog?: string;
    sourceCode?: string;
  };
  category: {
    home: boolean;
    ai: boolean;
    blockchain: boolean;
    web: boolean;
    mobile: boolean;
  };
  skills: {
    nextjs?: boolean;
    react?: boolean;
    express?: boolean;
    typescript?: boolean;
    prisma?: boolean;
    supabase?: boolean;
    graphql?: boolean;
    postgres?: boolean;
    aws?: boolean;
  };
}
