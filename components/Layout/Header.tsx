import styles from './Header.module.css';

export default function Header(): JSX.Element {
  return (
    <>
      <header className={styles.header}>
        <h1>Keithley.me</h1>
      </header>
    </>
  );
}
