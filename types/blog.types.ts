export interface BlogInterface {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  timeToRead: string;
  link?: string;
  category: {
    featured?: boolean;
    tutorial?: boolean;
    productivity?: boolean;
    notes?: boolean;
    philosophy?: boolean;
  };
}