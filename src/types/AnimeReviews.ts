interface AnimeReviews {
    date: string;
    review: string;
    score: number;
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