import React, { forwardRef, useImperativeHandle, useState } from 'react';

interface IModalProps {
  title?: string;
  children?: React.ReactElement;
  showTitle?: boolean;
  showHeader?: boolean;
  showClose?: boolean;
}

export interface IHandleModal {
  openModal: () => void;
  closeModal: () => void;
}

const Modal = forwardRef<IHandleModal, IModalProps>(
  ({ title = '', showHeader = true, showTitle = true, showClose = true, children }, ref) => {
    const [show, setShow] = useState(false);

    /**
     * 모달 열기
     */
    const openModal = () => {
      setShow(true);
    };

    /**
     * 모달닫기
     */
    const closeModal = () => {
      setShow(false);
    };

    /**
     * 내보낼 이벤트
     */
    useImperativeHandle(ref, () => ({
      openModal,
      closeModal,
    }));

    return (
      <>
        {show && (
          <article className="modal">
            {showHeader && (
              <header className="modal__header">
                {showTitle && <h2 className="modal__title">{title}</h2>}

                {showClose && (
                  <button className="modal__close" onClick={closeModal}>
                    <img src="/assets/images/icon/close.svg" alt="" />
                  </button>
                )}
              </header>
            )}

            <div className="modal__content">{children}</div>
          </article>
        )}
      </>
    );
  },
);

export default Modal;
