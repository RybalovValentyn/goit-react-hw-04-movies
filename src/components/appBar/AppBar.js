import Navigation from '../navigation/Navigation';
import styles from './appBar.module.css';

export default function Appbar() {
  return (
    <header className={styles.header}>
      <Navigation />
    </header>
  );
}
