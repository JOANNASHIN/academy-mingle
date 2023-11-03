import React, { forwardRef } from 'react';
import Modal, { IHandleModal } from '@/components/modules/modal/Modal';
import NoticeSummary, { Notice } from '@/components/parts/notice/noticeSummary/NoticeSummary';
import NoticeAddForm, { Form } from '@/components/modules/noticeAddForm/NoticeAddForm';

interface IProps {}

const NoticeFormModal = forwardRef<IHandleModal, IProps>((props, refModal) => {
  const hanldeSubmit = (payload: Form) => {
    console.log(payload, 'submit api');
  };

  return (
    <Modal ref={refModal} title="공지사항 등록" className="NoticeFormModal">
      <NoticeAddForm onSubmit={payload => hanldeSubmit(payload)}></NoticeAddForm>
    </Modal>
  );
});

export default NoticeFormModal;
