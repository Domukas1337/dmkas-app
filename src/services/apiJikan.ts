import Anime from "../types/Anime";
import AnimeReviews from "../types/AnimeReviews";

export async function getAnime(query: string): Promise<Anime[]> {
  const response = await fetch(`https://api.jikan.moe/v4/anime?q=${query}`);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data: { data: Anime[] } = await response.json();

  const uniqueData: Anime[] = data.data.filter(
    (anime: Anime, index: number, self: Anime[]) =>
      index === self.findIndex((t: Anime) => t.mal_id === anime.mal_id)
  );

  return uniqueData;
}

export async function getReviews(
  id: number,
  page: number
): Promise<{ data: AnimeReviews[]; pagination: { has_next_page: boolean } }> {
  const response = await fetch(
    `https://api.jikan.moe/v4/anime/${id}/reviews?page=${page}`
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const result = await response.json();

  return {
    data: result.data,
    pagination: result.pagination,
  };
}
export async function getAnimeDetails({
  random = false,
  id,
}: {
  random?: boolean;
  id?: number;
}) {
  if (random) {
    const response = await fetch(`https://api.jikan.moe/v4/random/anime`);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    return data;
  } else if (id) {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    return data;
  } else {
    return null;
  }
}
