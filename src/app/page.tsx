import Gallery from '@/features/pokemon/components/Gallery';

import styles from './index.module.scss';

const Home = () => {
  return (
    <main className={styles.main}>
      <h1>Hello, World!</h1>
      <Gallery />
    </main>
  );
};

export default Home;
