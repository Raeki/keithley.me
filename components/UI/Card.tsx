import { ReactNode } from 'react';
import styles from './Card.module.css';

type AppProps = {
  children: ReactNode;
};

export default function Card({ children }: AppProps): JSX.Element {
  return <div className={styles.card}>{children}</div>;
}
