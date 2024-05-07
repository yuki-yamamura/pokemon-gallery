type Props = React.PropsWithChildren<{
  color: 'coral' | 'cornflowerblue';
}>;

import styles from './index.module.css';

const Tag = ({ color, children }: Props) => (
  <div data-color={color} className={styles.module}>
    {children}
  </div>
);

export default Tag;
