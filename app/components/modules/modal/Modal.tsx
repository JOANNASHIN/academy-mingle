import style from "./Modal.style";

const Modal = () => {
  
  return (
    <article css={style} className="modal">
      <header className="modal__header">
        <h2 className="modal__title">모달</h2>
        <button className="modal__close">
          <img src="/assets/images/icon/close.svg" alt="" />
        </button>
      </header>

      <div>
        모달콘텐츠
      </div>
    </article>
  );
};

export default Modal;
