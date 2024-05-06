// import type { Pokemon } from '@/features/pokemon/types/Pokemon';
import Tag from './Tag';
import fs from 'fs/promises';
import path from 'path';

import type { Pokemon } from '@/features/pokemon/types/Pokemon';

import styles from './index.module.css';

type Props = {
  id: number;
};

const Card = async ({ id }: Props) => {
  // todo: write code to fetch data from the API.
  // const res = await fetch(`https://some-url/${id}`);
  // const data = (await res.json()) as Pokemon;
  // const { name } = data;
  console.log(id);

  const dataPath = path.join(process.cwd(), 'data', 'ditto.json');
  const json = (await fs.readFile(dataPath)).toString();
  const pokemon = JSON.parse(json) as Pokemon;
  const name = pokemon.name.slice(0, 2).toUpperCase() + pokemon.name.slice(1);

  return (
    // container query
    <div className={styles.module}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={pokemon.sprites.front_default} alt={name} />
      <div className={styles.name}>{name}</div>
      <div>
        <ul className={styles.abilities}>
          {pokemon.abilities.map(({ ability }) => (
            <li key={ability.name} className={styles.ability}>
              <Tag>{ability.name}</Tag>
            </li>
          ))}
        </ul>
        {/* description */}
      </div>
    </div>
  );
};

export default Card;
