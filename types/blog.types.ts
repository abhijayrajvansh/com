export interface BlogPost {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  timeToRead: string;
  link: string;
  category: {
    home: boolean;
    popular: boolean;
    tutorials: boolean;
    productivity: boolean;
    beginners: boolean;
  };
}