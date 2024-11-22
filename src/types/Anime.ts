interface Anime {
    status: string;
    images: {
      jpg: {
          image_url: string
      }
    }
    malId: number;
    rank: number;
    score: number;
    scored_by: number;
    title: string;
    title_japanese: string;
    synopsis?: string;
    genres?: string[];
    episodes?: number;
    type?: string;
    url?: string;
  }

export default Anime