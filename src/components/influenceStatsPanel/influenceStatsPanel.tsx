import React from 'react';
import TextStats from '../utlisComponents/textStats/textStats';

export default function InfluenceStatsPanel(): JSX.Element {
  return (
    <div className="container">
      <div className="leftSide"></div>
      <div className="rightSide">
        <TextStats textNum="0" description="Orders" color="green" />
        <TextStats textNum="0" description="Orders" />
        <TextStats textNum="0" description="Visits" />
        <TextStats textNum="zł0" description="AOV" />
        <TextStats textNum="0%" description="Convert" />
      </div>
    </div>
  );
}
