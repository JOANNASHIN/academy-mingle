import React, { forwardRef, useState } from 'react';
import Modal, { IHandleModal } from '@/components/modules/modal/Modal';
import NoticeAddForm, { Form } from '@/components/modules/noticeAddForm/NoticeAddForm';

interface IProps {}

const NoticeFormModal = forwardRef<IHandleModal, IProps>(({ onSubmit }: any, refModal) => {
  const [show, setShow] = useState(false);

  const openModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };

  const hanldeSubmit = (payload: Form) => {
    console.log(payload, 'submit api');
    alert('공지사항이 등록되었습니다.');
    onSubmit();
  };

  return (
    <>
      {/* {show && ( */}
      <Modal ref={refModal} title="공지사항 등록" className="NoticeFormModal">
        <NoticeAddForm onSubmit={payload => hanldeSubmit(payload)}></NoticeAddForm>
      </Modal>
      {/* )} */}
    </>
  );
});

export default NoticeFormModal;
