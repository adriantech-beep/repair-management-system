import SpinnerMini from "../../ui/SpinnerMini";
import { useLogout } from "./useLogout";
import { FaPowerOff } from "react-icons/fa";
import StyledNavLink from "../../ui/StyledNavLink";

const navLinkStyle = {
  backgroundColor: 'transparent'
}

function Logout() {
  const { logout, isPending } = useLogout();

  return (
    <StyledNavLink
      style={ navLinkStyle } 
      disabled={isPending} 
      onClick={logout} 
      aria-label="Logout">
      {
        !isPending ? 
        <FaPowerOff /> : 
        <SpinnerMini />
      }
      <span>Logout</span>
    </StyledNavLink>
  );
}

export default Logout;
