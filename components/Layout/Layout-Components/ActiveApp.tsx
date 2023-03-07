import { ReactNode, PropsWithChildren } from 'react';
import classes from '../Layout.module.css';

export default function ActiveApp({
  children,
}: PropsWithChildren): JSX.Element {
  return <article className={classes.row_activeApp}>{children}</article>;
}
