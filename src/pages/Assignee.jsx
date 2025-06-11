import { theme } from "../styles/theme";
import styled, { ThemeProvider } from "styled-components";
import ProgressCircleComponent from "../ui/ProgressCircle";
import AssignedRepairs from "../assignee/AssignedRepairs";

const StyledAssignee = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
`;
function Assignee() {
  return (
    <StyledAssignee>
      <ThemeProvider theme={theme}>
        <ProgressCircleComponent />
      </ThemeProvider>

      <AssignedRepairs />
    </StyledAssignee>
  );
}

export default Assignee;
