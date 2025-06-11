import { useSettings } from "../settings/useSettings";
import useUser from "../features/authentication/useUser";
import styled from "styled-components";
import EditIcon from "../ui/EditIcon";

const StyledLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

const TitleLogo = styled.div`
  letter-spacing: 1.2px;
  font-size: 1.2rem;
  position: relative;
  display: flex;
  align-items: center;

  h1 {
    font-size: 1.5rem;
    font-weight: medium;
  }
`;

function Logo() {
  const { settings } = useSettings();
  const { isAuthenticated, isAdmin } = useUser();
  const { company_logo, company_name } = settings ?? {};

  return (
    <StyledLogo>
      <Img 
        className="mb-4"
        src={company_logo} 
        alt="Your Company Logo Here" />
      <TitleLogo>
        <h1>{company_name || `Your company name`}</h1>
        {
          isAuthenticated && 
          isAdmin && 
          settings && 
          Object.keys(settings).length > 0 && 
          <EditIcon />
        }
      </TitleLogo>
    </StyledLogo>
  );
}

export default Logo;
