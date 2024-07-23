// import styles from './page.module.css';

import InfluenceStatsPanel from '@/components/influenceStatsPanel/influenceStatsPanel';
import DashboardMainSection from '@/components/dashboardMainSection/DashboardMainSection';

export default function Home(): JSX.Element {
  return (
    <main>
      <h1>Dashboaraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad</h1>
      <DashboardMainSection>
        <InfluenceStatsPanel />
      </DashboardMainSection>
    </main>
  );
}
