interface AnimeReviews {
    date: string;
    review: string;
    score: number;
    tags: string[];
    user: {
      url: string;
      username: string;
      images: {
        jpg: {
          image_url: string;
        }
      }
    }
  }

export default AnimeReviews;