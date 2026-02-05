import React, { Suspense } from "react";
import { MODAL_TYPES } from "../../features/ui/modalTypes";
import { useDispatch, useSelector } from "react-redux";
import { closeModalAction, selectModal } from "../../features/ui/uiSlice";
import { Box, CircularProgress } from "@mui/material";
const ConfirmationModal = React.lazy(
  () => import("./ConfirmationModal/ConfirmationModal"),
);
const ExistingQuestionModal = React.lazy(
  () => import("./ExistingQuestionModal/ExistingQuestionModal"),
);
const MODAL_COMPONENTS = {
  [MODAL_TYPES.CONFIRMATION]: ConfirmationModal,
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
    <Suspense fallback={<LoadingSpinner />}>
      <ModalComponent
        onClose={handleClose}
        //TODO open left for implementation of smooth exit animation. For now value is hardcoded and later will be managed via state.
        open={true}
        {...modalProps}
      />
    </Suspense>
  );
};
const LoadingSpinner = () => (
  <Box
    sx={{
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 9999,
    }}
  >
    <CircularProgress />
  </Box>
);

export default GlobalModalManager;
