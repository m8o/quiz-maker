import React from "react";
import { MODAL_TYPES } from "../../features/ui/modalTypes";
import DeleteConfirmationModal from "./DeleteConfirmationModal/DeleteConfirmationModal";
import ExistingQuestionModal from "./ExistingQuestionModal/ExistingQuestionModal";
import { useDispatch, useSelector } from "react-redux";
import { closeModalAction, selectModal } from "../../features/ui/uiSlice";
const MODAL_COMPONENTS = {
  [MODAL_TYPES.CONFIRMATION]: DeleteConfirmationModal,
  [MODAL_TYPES.EXISTING_QUESTION]: ExistingQuestionModal,
};
const GlobalModalManager = () => {
  const dispatch = useDispatch();
  const { type: modalType, props: modalProps } = useSelector(selectModal);
  if (!modalType) {
    return null;
  }
  const ModalComponent = MODAL_COMPONENTS[modalType];
  if (!ModalComponent) {
    return null;
  }
  const handleClose = () => {
    dispatch(closeModalAction());
  };
  return (
    <ModalComponent
      onClose={handleClose}
      //TODO open left for implementation of smooth exit animation. For now value is hardcoded and later will be managed via state.
      open={true}
      {...modalProps}
    />
  );
};

export default GlobalModalManager;
