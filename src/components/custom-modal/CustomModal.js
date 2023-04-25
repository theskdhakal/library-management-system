import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { setModalShow } from "../../system/systemSlice";

export const CustomModal = ({ heading, children }) => {
  const dispatch = useDispatch();
  const { modalShow } = useSelector((state) => state.system);
  return (
    <>
      <Modal
        show={modalShow}
        onHide={() => dispatch(setModalShow(false))}
        onClos
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {heading}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
};
