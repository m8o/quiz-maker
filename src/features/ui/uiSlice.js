import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: { type: null, props: {} },
};
const openModal = (state, action) => {
  state.modal.type = action.payload.modalType;
  state.modal.props = action.payload.modalProps;
};
const closeModal = (state) => {
  state.modal.type = null;
  state.modal.props = {};
};
const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: { openModal, closeModal },
});
export const { openModal: openModalAction, closeModal: closeModalAction } =
  uiSlice.actions;
export const selectModal = (state) => state.ui.modal;
export const selectModalType = (state) => state.ui.modal.type;
export const selectModalProps = (state) => state.ui.modal.props;
export default uiSlice.reducer;
