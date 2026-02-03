import React, { useCallback } from "react";
import { closeModalAction, openModalAction } from "../../features/ui/uiSlice";
import { MODAL_TYPES } from "../../features/ui/modalTypes";
import { useDispatch } from "react-redux";
import { deleteQuiz } from "../../features/quizzes/quizzesSlice";

const useUiController = () => {
  const dispatch = useDispatch();
  const openConfirmationModal = useCallback(
    ({ quizID }) => {
      dispatch(
        openModalAction({
          modalType: MODAL_TYPES.CONFIRMATION,
          modalProps: {
            onConfirm: () => dispatch(deleteQuiz(quizID)),
            title: "Are you sure you want to delete this quiz?",
            message: "This will permanently remove the quiz.",
            confirmText: "Delete",
          },
        }),
      );
    },
    [dispatch],
  );
  const openExistingQuestionModal = useCallback(
    ({ onConfirm }) => {
      dispatch(
        openModalAction({
          modalType: MODAL_TYPES.EXISTING_QUESTION,
          modalProps: {
            onConfirm,
          },
        }),
      );
    },
    [dispatch],
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
