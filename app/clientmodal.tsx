"use client";

import Modal from "./components/modal/Modal";

export default function ClientModal() {
  return (
    <Modal
      isOpen
      title="Modal 1"
      actionLabel="Submit"
      secondaryAction={() => console.log("Secondary Action")}
      secondaryActionLabel="Cancel"
    />
  );
}
