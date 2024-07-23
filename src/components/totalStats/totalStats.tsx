import React from 'react';
import styles from './totalStats.module.css';
import TextStats from '../utlisComponents/textStats/textStats';

export default function DashboardSection(): JSX.Element {
  return (
    <div>
      <h1 className={styles.header}>Total Stats</h1>
      <TextStats textNum="zł0.00" description="Total Revenue" />
      <TextStats textNum="0" description="Total Orders" />
      <TextStats textNum="1.8K" description="Total Visits" />
      <TextStats textNum="zł0.00" description="Total AOV" />
      <TextStats textNum="0%" description="Visit Conversion Rate" />
    </div>
  );
}
