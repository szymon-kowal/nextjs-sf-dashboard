import styles from '../sidebar.module.css';
export default function SidebarDivider({ text }: { text: string }): JSX.Element {
  return (
    <div className={styles.elementContainer}>
      <div>{text}</div>
      <div className={styles['vert-line']}></div>
    </div>
  );
}
