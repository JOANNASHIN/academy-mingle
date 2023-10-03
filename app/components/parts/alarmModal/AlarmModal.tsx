import React, { forwardRef } from 'react';
import Modal, { IHandleModal } from '@/components/modules/modal/Modal';

interface IProps {}

const AlarmModal = forwardRef<IHandleModal, IProps>((props, refModal) => {
  return (
    <>
      <Modal ref={refModal} title="알림">
        <div>zzz</div>
      </Modal>
    </>
  );
});

export default AlarmModal;
