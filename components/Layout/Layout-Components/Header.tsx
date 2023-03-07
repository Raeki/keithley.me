import classes from '../Layout.module.css';

type AppProps = {
  setSidebarDisabled: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Header({ setSidebarDisabled }: AppProps): JSX.Element {
  function handleSidebarToggle() {
    setSidebarDisabled(prevState => !prevState);
  }

  return (
    <header className={classes.header}>
      <button onClick={handleSidebarToggle}>Toggle Sidebar</button>
      <h1>Keithley.me</h1>
    </header>
  );
}
