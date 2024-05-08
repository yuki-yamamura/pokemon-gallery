import Card from '@/features/pokemon/components/Card';

import styles from './index.module.css';

const Gallery = () => {
  const pokemonIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className={styles.module}>
      {pokemonIds.map((id) => (
        <Card id={id} key={id} />
      ))}
    </div>
  );
};

export default Gallery;
