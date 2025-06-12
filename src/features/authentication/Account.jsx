import { MdAccountCircle } from "react-icons/md";
import StyledNavLink from "../../ui/StyledNavLink";
import ModalWindow from "../../ui/ModalWindow";
import UpdateUserDataForm from "./UpdateUserDataForm";

const navLinkStyle = {
  backgroundColor: "transparent",
};

function Account() {
  return (
    <ModalWindow>
      <ModalWindow.Open opens="update-account">
        <StyledNavLink style={navLinkStyle}>
          <MdAccountCircle size={20} />
          <span>Account</span>
        </StyledNavLink>
      </ModalWindow.Open>

      <ModalWindow.Window name="update-account">
        <UpdateUserDataForm />
      </ModalWindow.Window>
    </ModalWindow>
  );
}

export default Account;
