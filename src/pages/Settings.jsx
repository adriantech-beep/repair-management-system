import styled from "styled-components";
import SettingsForm from "../settings/SettingsForm";

const StyledSettings = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

function Settings() {
  return (
    <StyledSettings>
      <SettingsForm />
    </StyledSettings>
  );
}

export default Settings;
