import { Dispatch, SetStateAction } from "react";

export type ModalProps = {
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
};
