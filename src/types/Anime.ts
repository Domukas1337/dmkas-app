interface Anime {
    airingStatus: string;
    images: {
      jpg: {
          image_url: string
      }
    }
    malId: number;
    rank: number;
    score: number;
    scoredBy: number;
    title: string;
    titleJapanese: string;
    synopsis?: string;
    genres?: string[];
    episodes?: number;
    status?: string;
    type?: string;
    url?: string;
  }

export default Anime