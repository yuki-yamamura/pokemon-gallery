import Card from '@/features/pokemon/components/Card';

import type { PokemonInfo } from '@/types/PokemonInfo';

import styles from './index.module.css';

type ApiResponseType = {
  next: string;
  results: PokemonInfo[];
};

const Gallery = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon');
  const data = (await res.json()) as ApiResponseType;

  return (
    <div className={styles.module}>
      {data.results.map((pokemonInfo) => (
        <Card {...pokemonInfo} key={pokemonInfo.name} />
      ))}
    </div>
  );
};

export default Gallery;
