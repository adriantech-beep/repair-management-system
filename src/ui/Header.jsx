import styled from "styled-components";
import UserAvatar from "../features/authentication/UserAvatar";
import ToggleSwitch from "./ToggleSwitch";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1.2rem;
`;

function Header() {
  return (
    <StyledHeader>
      <UserAvatar />
      <ToggleSwitch />
    </StyledHeader>
  );
}

export default Header;
