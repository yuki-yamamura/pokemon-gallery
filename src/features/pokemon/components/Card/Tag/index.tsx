type Props = React.PropsWithChildren;

import styles from './index.module.css';

const Tag = ({ children }: Props) => (
  <div className={styles.module}>{children}</div>
);

export default Tag;
