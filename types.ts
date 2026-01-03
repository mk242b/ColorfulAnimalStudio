export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // Emoji or generic icon name
  color: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  videoId?: string;
}

export interface CharacterIdea {
  name: string;
  species: string;
  description: string;
  personality: string[];
  storyHook: string;
}