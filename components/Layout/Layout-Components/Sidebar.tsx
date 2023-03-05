import classes from '../Layout.module.css';

export default function Sidebar(): JSX.Element {
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
