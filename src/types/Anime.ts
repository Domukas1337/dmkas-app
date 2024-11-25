interface Anime {
    status: string;
    images: {
      jpg: {
          image_url: string
      }
    }
    mal_id: number;
    rank: number;
    score: number;
    scored_by: number;
    title: string;
    title_japanese: string;
    synopsis?: string;
    genres?: string[];
    episodes?: number;
  }

export default Anime