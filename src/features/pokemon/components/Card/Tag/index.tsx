import { Zap } from 'lucide-react';

type Props = React.PropsWithChildren<{
  color: 'coral' | 'cornflowerblue';
}>;

import styles from './index.module.css';

const Tag = ({ color, children }: Props) => (
  <div data-color={color} className={styles.module}>
    <Zap width={14} height={14} className={styles.image} />
    <p>{children}</p>
  </div>
);

export default Tag;
