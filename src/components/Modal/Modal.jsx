import Button from "../Button";
import "./index.css";

const Modal = ({ modalTextContent, onModalConfirm, setModalVisibility }) => {
  const onConfirmBtn = () => {
    onModalConfirm();
    setModalVisibility(false);
  };

  const onCancelBtn = () => {
    setModalVisibility(false);
  };

  return (
    <div className="Modal">
      <p>{modalTextContent}</p>
      <div className="Modal__btns">
        <Button
          onHandleClick={onCancelBtn}
          className="btn__annulla"
          btnTextContent="Annulla"
          color="rgb(195, 42, 200)"
          type="button"
        />
        <Button
          onHandleClick={onConfirmBtn}
          className="btn__conferma"
          btnTextContent="Conferma"
          color="#0fffa3"
          type="button"
        />
      </div>
    </div>
  );
};

export default Modal;
