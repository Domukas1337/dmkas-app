interface AnimeReviews {
    data: {
      date: string;
      review: string;
      score: number;
      tags: string[];
      is_spoiler: boolean;
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
}

export default AnimeReviews;