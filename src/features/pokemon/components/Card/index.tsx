import type { Pokemon } from '@/features/pokemon/types/Pokemon';

import styles from './index.module.css';

type Props = {
  id: number;
};

const Card = async ({ id }: Props) => {
  // fetching data
  const res = await fetch(`https://some-url/${id}`);
  const data = (await res.json()) as Pokemon;
  const { name } = data;

  return (
    // container query
    <div className={styles.module}>
      {/* image */}
      <div>{name}</div>
      <div>
        {/* tags */}
        {/* description */}
      </div>
    </div>
  );
};

export default Card;
