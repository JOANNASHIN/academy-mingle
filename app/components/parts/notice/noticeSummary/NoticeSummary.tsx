import React from 'react';
import { YN } from '@/types/common';

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
    <div>
      <span>
        <img src="/assets/images/icon/megaphone-fill.svg" alt={noti?.type} />
      </span>
      <div>
        <p>{noti?.title}</p>
      </div>
      <div>
        <p>{noti?.detail}</p>
        {noti?.readYn && <span>안읽음</span>}
      </div>
    </div>
  );
};

export default NoticeSummary;
