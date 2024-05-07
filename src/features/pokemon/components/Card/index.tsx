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
  console.log(id);

  const dataPath = path.join(process.cwd(), 'data', 'ditto.json');
  const json = (await fs.readFile(dataPath)).toString();
  const pokemon = JSON.parse(json) as Pokemon;
  const name = pokemon.name.slice(0, 2).toUpperCase() + pokemon.name.slice(1);

  return (
    <div className={styles.module}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={pokemon.sprites.front_default}
        alt={name}
        className={styles.image}
      />
      <div className={styles.name}>{name}</div>
      <div className={styles.details}>
        <ul className={styles.abilities}>
          {pokemon.abilities.map(({ ability }) => (
            <li key={ability.name} className={styles.ability}>
              <Tag color="coral">{ability.name}</Tag>
            </li>
          ))}
        </ul>
        <ul className={styles.types}>
          {pokemon.types.map(({ type }) => (
            <li key={type.name} className={styles.type}>
              <Tag color="cornflowerblue">{type.name}</Tag>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
