import Gallery from '@/features/pokemon/components/Gallery';

import styles from './index.module.scss';

const Home = () => {
  return (
    <main>
      <h1 className={styles.heading}>Pokemon Gallery</h1>
      <Gallery />
    </main>
  );
};

export default Home;
