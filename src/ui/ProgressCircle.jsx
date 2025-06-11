import styled from "styled-components";
import { useAssignee } from "../assignee/useAssignee";
import { calcPercentage } from "../helpers/calcPecrcentage";
import { FaBarsProgress } from "react-icons/fa6";
import Stat from "./Stat";

const StyledProgress = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`;
const Wrapper = styled.div`
  position: relative;
  width: 16rem;
  height: 16rem;
  border-radius: 50%;
  background-color: var(--color-grey-50);
`;

const SVG = styled.svg`
  width: 100%;
  height: 100%;
  transform: rotate(135deg);
`;

const CircleBase = styled.circle`
  cx: 18;
  cy: 18;
  r: 16;
  fill: none;
  stroke-width: 1.5;
  stroke-linecap: round;
`;

const BackgroundCircle = styled(CircleBase)`
  stroke: ${({ theme }) => theme.colors.gray200};
`;

const ProgressCircle = styled(CircleBase)`
  stroke: ${({ theme }) => theme.colors.blue600};
  stroke-dasharray: ${({ dasharray }) => dasharray};
`;

const InfoContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.2em;

  svg {
    font-size: 2.8rem;
    color: blue;
  }
`;

const StatContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 85rem;
  gap: 0.5em;
`;

const Percentage = styled.span`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.blue600};
`;

const StatusText = styled.span`
  color: ${({ theme }) => theme.colors.blue600};
  display: block;
`;

function ProgressCircleComponent() {
  const { assignedRepairs } = useAssignee();
  const { completionPercentage, progressStrokeDasharray } =
    calcPercentage(assignedRepairs);

  // tried to use nullish coalescing rather than optional chaining because sometimes the data is undefined or null;
  const completedCount = (assignedRepairs ?? []).filter(
    (pending) => pending.isCompleted
  ).length;

  const pendingCount = (assignedRepairs ?? []).filter(
    (pending) => pending.status === 'pending'
  ).length;

  const confirmationCount = (assignedRepairs ?? []).filter(
    (pending) => pending.status === 'forConfirmation'
  ).length;

  return (
    <StyledProgress>
      <Wrapper>
        <SVG viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
          <BackgroundCircle />
          <ProgressCircle dasharray={progressStrokeDasharray} />
        </SVG>

        <InfoContainer>
          <Percentage>{completionPercentage}%</Percentage>
          <StatusText>
            {completionPercentage === 100 ? "Complete" : "Progress"}
          </StatusText>
          <FaBarsProgress />
        </InfoContainer>
      </Wrapper>

      <StatContainer>
        <Stat title="Completed" value={completedCount} icon="🟢" />
        <Stat title="Pending" value={pendingCount} icon="🔴" />
        <Stat title="For Confirmation" value={confirmationCount} icon="✅" />
      </StatContainer>
    </StyledProgress>
  );
}

export default ProgressCircleComponent;
