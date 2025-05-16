import styled from "styled-components";
import { formatTimestamp } from "../helpers/formatTime";
import { useNavigate } from "react-router-dom";
import Status from "../ui/Status";
import Button from "../ui/Button";

const StyledAssignedArrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  display: grid;
  grid-template-columns: 0.18fr 0.18fr 0.2fr 0.25fr 0.3fr 0.2fr 0.1fr;
  border-bottom: 1px solid var(--color-grey-200);
  padding: 0.5em;
`;

const statusToTagName = {
  true: "green",
  false: "red",
};

function AssignedRow({
  tech: {
    id: assignedId,
    created_at,
    imei,
    phoneModel,
    completed,
    phoneCondition,
    cost,
  },
}) {
  const navigate = useNavigate();
  const receivedDate = formatTimestamp(created_at);

  return (
    <StyledAssignedArrow>
      <div>{receivedDate}</div>
      <Status type={statusToTagName[completed]}>
        {completed === false ? "pending" : "done"}
      </Status>
      <div>{phoneModel}</div>
      <div>{imei}</div>
      <div>{phoneCondition}</div>
      <div>{cost}</div>

      <Button
        variation="primary"
        onClick={() => navigate(`/assignee/${assignedId}`)}
      >
        View
      </Button>
    </StyledAssignedArrow>
  );
}

export default AssignedRow;
