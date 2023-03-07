import classes from '../Layout.module.css';

type AppProps = {
  disabled: boolean;
};

export default function Sidebar({ disabled }: AppProps): JSX.Element {
  if (disabled) {
    return <></>;
  }

  return (
    <aside className={classes.row_sidebar}>
      <nav className={classes.row_sidebar__nav}>
        <ul>
          <li>link 1</li>
          <li>link 2</li>
          <li>link 3</li>
        </ul>
      </nav>
    </aside>
  );
}
