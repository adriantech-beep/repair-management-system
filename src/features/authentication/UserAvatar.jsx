import styled from "styled-components";
import useUser from "./useUser";
import { Logo } from '../../utilities/constants'

const StyledUserAvatar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-600);
  padding: 0.5em;

  span {
    font-size: 12px;
  }
`;

const Avatar = styled.img`
  display: block;
  width: 3rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);
`;

function UserAvatar() {
  const { user } = useUser();
  const { fullName, avatar } = user.user_metadata;

  return (
    <StyledUserAvatar>
      <Avatar src={avatar || Logo} alt={`Avatar of ${fullName}`} />
      <span>{ fullName }</span>
    </StyledUserAvatar>
  );
}

export default UserAvatar;
