interface Anime {
    airingStatus: string;
    image: string;
    malId: number;
    rank: number;
    score: number;
    scoredBy: number;
    title: string;
    titleJapanese: string;
  }

interface AnimeDetails extends Anime {
    description: string;
    genres: string[];
    episodes: number;
    status: string;
    type: string;
    url: string;
  }

export type { Anime, AnimeDetails }