import { useState } from "react";
import { LibraryMusicItem } from "./components/LibraryMusicItem";
import { PlaylistMusicItem } from "./components/PlaylistMusicItem";

const biblioteca = [
  { id: 1, titulo: "Horizonte Infinito", artista: "Aurora Boreal", duracaoSegundos: "4:00", capaUrl: "https://picsum.photos/id/100/80/80.jpg" },
  { id: 2, titulo: "Chuva de Estrelas", artista: "Luz Serena", duracaoSegundos: "3:18", capaUrl: "https://picsum.photos/id/101/80/80.jpg" },
  { id: 3, titulo: "Vento Solar", artista: "Cosmos Livre", duracaoSegundos: "3:35", capaUrl: "https://picsum.photos/id/102/80/80.jpg" },
  { id: 4, titulo: "Oceano de Sonhos", artista: "Maré Alta", duracaoSegundos: "4:20", capaUrl: "https://picsum.photos/id/103/80/80.jpg" },
  { id: 5, titulo: "Labirinto de Luz", artista: "Neon Vibes", duracaoSegundos: "3:02", capaUrl: "https://picsum.photos/id/104/80/80.jpg" },
  { id: 6, titulo: "Pulsar", artista: "Galáxia Azul", duracaoSegundos: "3:22", capaUrl: "https://picsum.photos/id/111/80/80.jpg" },
  { id: 7, titulo: "Aurora Urbana", artista: "Cidade Noturna", duracaoSegundos: "3:45", capaUrl: "https://picsum.photos/id/106/80/80.jpg" },
  { id: 8, titulo: "Chamas do Amanhã", artista: "Solaris", duracaoSegundos: "3:10", capaUrl: "https://picsum.photos/id/107/80/80.jpg" },
  { id: 9, titulo: "Rios de Mercúrio", artista: "Planeta Vermelho", duracaoSegundos: "4:08", capaUrl: "https://picsum.photos/id/108/80/80.jpg" },
  { id: 10, titulo: "Caminho das Nuvens", artista: "Horizonte Livre", duracaoSegundos: "3:30", capaUrl: "https://picsum.photos/id/109/80/80.jpg" }
];

interface PlaylistItem {
	id: number;
	title: string;
}

export default function App() {
  const [playlist, setPlaylist] = useState<PlaylistItem[]>([]);

  function addSongToPlaylist(id: number) {
    const song = biblioteca.find(song => song.id === id);
    if (!song) {
      return;
    }
    setPlaylist([...playlist, {
      id: song.id,
      title: song.titulo,
    }]);
  }

  function clearPlaylist() {
    setPlaylist([]);
  }

  return (
    <main className="w-full h-screen max-w-250 flex flex-col justify-center gap-4 p-4 mx-auto">
      <header className="w-full">
        <h1 className="text-center font-extrabold text-xl text-transparent bg-linear-to-r from-brand-accent to-brand-accent-2 bg-clip-text md:text-2xl">
          🎧 Desafio React & Tailwind - Biblioteca & Playlist
        </h1>
      </header>

      <section className="bg-brand-surface border border-brand-border rounded-2xl shadow-2xl overflow-hidden">
        {/* Cabeçalho */}
        <div className="py-3 px-4 border-b border-b-brand-border flex gap-2 flex-wrap items-center justify-between bg-linear-to-b from-brand-muted-surface to-brand-surface">
          <div className="flex gap-2 flex-wrap items-center">
            <span className="text-xs border border-brand-border py-1.5 px-2.5 rounded-full text-brand-muted bg-linear-to-b from-brand-surface to-brand-muted-surface">Biblioteca: <strong>{biblioteca.length}</strong></span>
            <span className="text-xs border border-brand-border py-1.5 px-2.5 rounded-full text-brand-muted bg-linear-to-b from-brand-surface to-brand-muted-surface">Playlist: <strong>{playlist.length}</strong></span>
          </div>
          <button onClick={clearPlaylist} className="appearance-none border border-brand-border bg-brand-muted-surface text-brand-text py-2 px-4 rounded-lg cursor-pointer font-semibold transition duration-200 hover:-translate-y-0.5 hover:border-brand-accent">Limpar playlist</button>
        </div>

        {/* Conteúdo */}
        <div className="grid grid-cols-[1fr_380px] gap-0">

          {/* Coluna esquerda: Biblioteca */}
          <div className="p-4">
            <h3 className="mb-2.5 text-sm text-brand-muted uppercase tracking-wider">Biblioteca</h3>
            <ul className="list-none m-0 p-0 grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-2.5">
              {biblioteca.map(song =>
                <LibraryMusicItem
                  key={song.id}
                  id={song.id}
                  cover={song.capaUrl}
                  title={song.titulo}
                  artist={song.artista}
                  duration={song.duracaoSegundos}
                  onAddSongToPlaylist={addSongToPlaylist}
                />
              )}
            </ul>
          </div>

          {/* Coluna direita: Playlist */}
          <div className="p-4">
            <h3 className="mb-2.5 text-sm text-brand-muted uppercase tracking-wider">Minha playlist</h3>
            {playlist.length === 0 && <p className="text-brand-muted my-2.5">Sua playlist está vazia. Adicione itens pela biblioteca.</p>}
            <ul className="list-none m-0 p-0 flex flex-col gap-2">
              {playlist.map((song, index) => 
                <PlaylistMusicItem key={song.id} index={index} title={song.title}
              />)}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
