import Anime from "../types/Anime";

export default function AnimeDetails({ anime }: { anime: Anime }) {
    return (
        <div className="text-white">
            <p>{anime.airingStatus}</p>
            <img src={anime.images.jpg.image_url} alt={anime.title} />
            <p>{anime.malId}</p>
            <p>{anime.rank}</p>
            <p>{anime.score}</p>
            <p>{anime.scoredBy}</p>
            <p>{anime.title}</p>
            <p>{anime.titleJapanese}</p>
            <p>{anime.synopsis}</p>
            {anime.genres && <p>{anime.genres.map((genre: any) => genre.name).join(', ')}</p>}
            <p>{anime.episodes}</p>
            <p>{anime.status}</p>
            <p>{anime.type}</p>
            <p>{anime.url}</p>
        </div>
    )
}