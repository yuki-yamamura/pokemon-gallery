'use client';

import Tag from './Tag';
import useSWR from 'swr';

import type { Pokemon } from '@/features/pokemon/types/Pokemon';
import type { PokemonInfo } from '@/types/PokemonInfo';

import styles from './index.module.css';

type Props = PokemonInfo;

const Card = ({ name, url }: Props) => {
  const { data, isLoading } = useSWR(url, async (url: string) => {
    const res = await fetch(url);
    const data = (await res.json()) as Pokemon;

    return data;
  });
  const formattedName = name.slice(0, 1).toUpperCase() + name.slice(1);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.module}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={data?.sprites.front_default}
        alt={formattedName}
        className={styles.image}
      />
      <div className={styles.name}>{formattedName}</div>
      <div className={styles.details}>
        <ul className={styles.abilities}>
          {data?.abilities.map(({ ability }) => (
            <li key={ability.name} className={styles.ability}>
              <Tag color="coral">{ability.name}</Tag>
            </li>
          ))}
        </ul>
        <ul className={styles.types}>
          {data?.types.map(({ type }) => (
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
