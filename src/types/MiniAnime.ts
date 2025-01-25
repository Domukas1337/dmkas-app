interface MiniAnime {
  images: {
    jpg: {
      image_url?: string;
      large_image_url?: string;
    };
  };
  mal_id: number;
  rank: number;
  score: number;
  title: string;
}

export default MiniAnime;
