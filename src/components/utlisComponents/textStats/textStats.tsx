import React from 'react';
import style from './textStats.module.css';

export default function TextStats({
  textNum,
  description,
  color = 'black',
}: {
  textNum: string;
  description: string;
  color?: string;
}): JSX.Element {
  return (
    <div className={style.container}>
      <div className={style.textNum} style={{ color }}>
        {textNum}
      </div>
      <span className={style.description}>{description}</span>
    </div>
  );
}
