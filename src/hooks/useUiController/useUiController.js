import React, { useCallback } from "react";
import { closeModalAction, openModalAction } from "../../features/ui/uiSlice";
import { MODAL_TYPES } from "../../features/ui/modalTypes";
import { useDispatch } from "react-redux";

const useUiController = () => {
  const dispatch = useDispatch();
  const openConfirmationModal = useCallback(
    ({ onConfirm }) => {
      dispatch(
        openModalAction({
          modalType: MODAL_TYPES.CONFIRMATION,
          modalProps: { onConfirm },
        })
      );
    },
    [dispatch]
  );
  const openExistingQuestionModal = useCallback(
    ({ onConfirm }) => {
      dispatch(
        openModalAction({
          modalType: MODAL_TYPES.EXISTING_QUESTION,
          modalProps: { onConfirm },
        })
      );
    },
    [dispatch]
  );
  const closeModal = useCallback(() => {
    dispatch(closeModalAction());
  }, [dispatch]);
  return {
    openConfirmationModal,
    openExistingQuestionModal,
    closeModal,
  };
};

export default useUiController;
