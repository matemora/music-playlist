import { Plus } from "lucide-react";

interface LibraryMusicItemProps {
    id: number;
    cover: string;
    title: string;
    artist: string;
    duration: string;
    onAddSongToPlaylist: (id: number) => void;
}

export function LibraryMusicItem({ id, cover, title, artist, duration, onAddSongToPlaylist }: LibraryMusicItemProps) {
    return (
        <li className="grid grid-cols-[1fr_auto] gap-3 items-center p-3 border border-brand-border rounded-xl min-h-20 bg-linear-to-b from-brand-surface to-brand-muted-surface group">
            {/* informações da música */}
            <div className="flex items-center gap-2.5 min-w-0">
                {/* imagem de capa do album */}
                <img className="rounded-md object-cover shrink-0 w-12 h-12" src={cover} alt="Capa do album" />
               
                {/* informações textuais */}
                <div className="flex flex-col gap-1.5 min-w-0">
                    <div className="font-extrabold overflow-hidden whitespace-nowrap text-ellipsis">{title}</div> {/* título */}
                    <div className="text-xs overflow-hidden whitespace-nowrap text-ellipsis"> {/* artista + duração */}
                        <span>{artist}</span>
                        <span> - </span>
                        <span>{duration}</span>
                    </div>
                </div>
            </div>

            {/* botão de adicionar à playlist */}
            <div className="flex items-center justify-center w-9 h-9 opacity-0 pointer-events-none transition-opacity duration-200 group-hover:opacity-100 group-hover:pointer-events-auto">
                <button className="appearance-none bg-transparent border border-brand-border text-brand-muted w-9 h-9 rounded-full inline-flex items-center justify-center cursor-pointer hover:bg-brand-muted-surface hover:border-brand-accent hover:text-brand-text transition duration-200" onClick={() => onAddSongToPlaylist(id)} aria-label="Adicionar à playlist" title="Adicionar à playlist">
                    <Plus />
                </button>
            </div>
        </li>
    );
}