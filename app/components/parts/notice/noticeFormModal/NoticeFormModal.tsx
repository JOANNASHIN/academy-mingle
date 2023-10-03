import React, { forwardRef } from 'react';
import Modal, { IHandleModal } from '@/components/modules/modal/Modal';
import NoticeSummary, { Notice } from '@/components/parts/notice/noticeSummary/NoticeSummary';
import NoticeAddForm from '@/components/modules/noticeAddForm/NoticeAddForm';

interface IProps {}

const NoticeFormModal = forwardRef<IHandleModal, IProps>((props, refModal) => {
  return (
    <Modal ref={refModal} title="공지사항 등록" className="NoticeFormModal">
      <NoticeAddForm></NoticeAddForm>
    </Modal>
  );
});

export default NoticeFormModal;
