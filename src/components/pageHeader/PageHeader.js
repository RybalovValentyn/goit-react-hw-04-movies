import styles from './pageheader.module.css';

export default function PageHeading({ text }) {
  return <h1 className={styles.title}>{text}</h1>;
}