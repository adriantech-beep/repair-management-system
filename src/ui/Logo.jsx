import { useSettings } from "../settings/useSettings";
import { BiEdit } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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

const TitleLogo = styled.h1`
  letter-spacing: 3px;
  font-size: 1.2rem;
  position: relative;
  display: flex;
  align-items: center;
`;

const EditIconWrapper = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;

  &:hover::after {
    content: "Edit";
    position: absolute;
    top: -25px;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--color-grey-700);
    color: var(--color-grey-50);
    padding: 5px 8px;
    border-radius: 5px;
    font-size: 0.8rem;
    white-space: nowrap;
  }
`;


function Logo() {
  const { settings } = useSettings();
  const { company_logo, company_name } = settings ?? {};

  const navigate = useNavigate();

  return (
    <StyledLogo>
      <Img src={company_logo} alt="Your Company Logo Here" />
      <TitleLogo>
        {company_name ? (
          <h1>{company_name}</h1>
        ) : (
          <h1>Your Company Name Here</h1>
        )}
        {settings && Object.keys(settings).length > 0 && (
          <EditIconWrapper>
            <BiEdit
              onClick={() => navigate("/settings", { state: { settings } })}
            />
          </EditIconWrapper>
        )}
      </TitleLogo>

    </StyledLogo>
  );
}

export default LogoComponent;
