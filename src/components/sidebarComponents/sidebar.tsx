import SidebarDivider from './lesserComponents/sidebar-divider';
import SidebarItem from './lesserComponents/sidebar-item';
import styles from './sidebar.module.css';

export default function Sidebar(): JSX.Element {
  return (
    <div className={styles.sidebar}>
      <SidebarItem imgSrc="" text="Reports" />
      <SidebarDivider text="CHANNELS & CAMPAIGNS" />
      <SidebarItem imgSrc="" text="Web" />
      <SidebarItem imgSrc="" text="Server-Side" />
      <SidebarItem imgSrc="" text="Triggered" />
      <SidebarItem imgSrc="" text="Mobile" />
      <SidebarItem imgSrc="" text="Email" />
      <SidebarItem imgSrc="" text="Third Party" />
      <SidebarDivider text="CHANNELS & CAMPAIGNS" />
      <SidebarItem imgSrc="" text="UserSegments" />
      <SidebarItem imgSrc="" text="AccountSegments" />
      <SidebarDivider text="CATALOG" />
      <SidebarItem imgSrc="" text="Catalog" />
      <SidebarItem imgSrc="" text="Surveys" />
      <SidebarDivider text="MACHINE LEARNING" />
    </div>
  );
}
