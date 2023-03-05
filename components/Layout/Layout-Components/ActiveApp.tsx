import { ReactNode } from 'react';
import classes from '../Layout.module.css';

type AppProps = {
  children: ReactNode;
};

export default function ActiveApp({ children }: AppProps): JSX.Element {
  return <article className={classes.row_activeApp}>{children}</article>;
}
