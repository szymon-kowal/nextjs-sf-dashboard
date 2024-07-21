import styles from '../sidebar.module.css';
import Image from 'next/image';
export default function SidebarItem({ imgSrc, text }: { imgSrc: string; text: string }): JSX.Element {
  return (
    <div className={styles.itemContainer}>
      <Image src={imgSrc} alt={text} className={styles.icon} width={10} />
      <span>{text}</span>
    </div>
  );
}
