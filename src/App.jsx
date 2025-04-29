import { useState } from "react";
import { episodeList } from "./data";

export default function App() {
  // TODO
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState();

  function EpisodeDescriptions() {
    if (!selectedEpisode) {
      return (
        <section className="description">
          <h2>Description</h2>
          <p>Select an Episode to learn more!</p>
        </section>
      );
    }

    return (
      <section className="description">
        <h2>{selectedEpisode.name}</h2>
        <p>{selectedEpisode.title}</p>
        <p>{selectedEpisode.description}</p>
        <button
          onClick={() => {
            `${selectedEpisode.title}`;
          }}
        >
          Watch Now
        </button>
      </section>
    );
  }

  function EpisodeTitles() {
    return (
      <section className="title">
        <h2>Episodes</h2>
        <ul className="title">
          {episodeList.map((episode) => (
            <li key={episode.title} onClick={() => setSelectedEpisode(episode)}>
              {episode.title}
            </li>
          ))}
        </ul>
      </section>
    );
  }

  return (
    <>
      <header>
        <h1>Dark Echoes</h1>
      </header>
      <main>
        <EpisodeTitles />
        <EpisodeDescriptions />
      </main>
    </>
  );
}
