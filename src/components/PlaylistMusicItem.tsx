interface PlaylistMusicItemProps {
    index: number;
    title: string;
}
export function PlaylistMusicItem({ index, title }: PlaylistMusicItemProps) {
    return (
        <li className="rounded-xl py-1.5 flex items-center gap-2.5 text-sm hover:bg-brand-muted-surface transition">
            <span className="font-extrabold min-w-7 opacity-90 text-center px-1">{index}</span>
            <span className="font-semibold">{title}</span>
        </li>
    );
}