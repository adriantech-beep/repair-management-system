import CreatePhoneForm from "./CreatePhoneForm";
import ModalWindow from "../ui/ModalWindow";
import Button from "../ui/Button";

function AddPhone() {
  return (
    <ModalWindow>
      <ModalWindow.Open opens="phone-form">
        <Button size="medium" variation="primary">
          Add Phone
        </Button>
      </ModalWindow.Open>
      <ModalWindow.Window name="phone-form">
        <CreatePhoneForm />
      </ModalWindow.Window>
    </ModalWindow>
  );
}

export default AddPhone;
