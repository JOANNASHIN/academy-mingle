import React from 'react';
import { YN } from '@/types/common';
import style from './NoticeSummary.style';

export interface Notice {
  id: number;
  type: string;
  title: string;
  detail: string;
  readYn: YN;
  date: string;
}

interface IProps {
  noti: Notice;
}

const NoticeSummary = ({ noti }: IProps) => {
  return (
    <div css={style}>
      <span className="noti__icon">
        <img src="/assets/images/icon/megaphone-fill.svg" alt={noti?.type} />
      </span>
      <p className="noti__title">{noti?.title}</p>
      {noti?.readYn && <span className="noti__check">안읽음</span>}
    </div>
  );
};

export default NoticeSummary;
