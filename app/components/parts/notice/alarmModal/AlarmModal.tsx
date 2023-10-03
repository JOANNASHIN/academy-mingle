import React, { forwardRef } from 'react';
import Modal, { IHandleModal } from '@/components/modules/modal/Modal';
import NoticeSummary, { Notice } from '@/components/parts/notice/noticeSummary/NoticeSummary';

interface IProps {}

const AlarmModal = forwardRef<IHandleModal, IProps>((props, refModal) => {
  const alarms: Notice[] = [
    {
      id: 0,
      type: 'notice',
      title: '공지사항입니다.',
      detail: '안녕하세요 어머님들. 강의...',
      readYn: 'N',
      date: '2023-09-07',
    },
    {
      id: 1,
      type: 'notice',
      title: '공지사항입니다.',
      detail: '안녕하세요 어머님들. 강의...',
      readYn: 'N',
      date: '2023-09-07',
    },
    {
      id: 2,
      type: 'notice',
      title: '공지사항입니다.',
      detail: '안녕하세요 어머님들. 강의...',
      readYn: 'N',
      date: '2023-09-07',
    },
  ];

  return (
    <Modal ref={refModal} title="알림" className="alarmModal">
      <>
        <div className="alarm__wrapper">
          {alarms &&
            alarms.map(noti => (
              <React.Fragment key={noti.id}>
                <NoticeSummary noti={noti} />
              </React.Fragment>
            ))}
        </div>
      </>
    </Modal>
  );
});

export default AlarmModal;
