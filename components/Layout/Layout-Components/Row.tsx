import { ReactNode } from 'react';
import classes from '../Layout.module.css';

type AppProps = {
  children: ReactNode;
};

export default function Row({ children }: AppProps): JSX.Element {
  return <section className={classes.row}>{children}</section>;
}
