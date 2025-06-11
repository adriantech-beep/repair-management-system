import styled from "styled-components";
import { formatTimestamp } from "../helpers/formatTime";
import { statusToTagName } from "../utilities/helpers";
import { useNavigate } from "react-router-dom";
import Status from "../ui/Status";
import Button from "../ui/Button";

const StyledAssignedArrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  display: grid;
  grid-template-columns: 0.26fr 0.25fr 0.25fr 0.3fr 0.4fr 0.15fr;
  border-bottom: 1px solid var(--color-grey-200);
  padding: 0.5em;
`;

function AssignedRow({
  tech: {
    id: assignedId,
    created_at,
    imei,
    phoneModel,
    phoneCondition,
    status,
  },
}) {
  const navigate = useNavigate();
  const receivedDate = formatTimestamp(created_at);

  return (
    <StyledAssignedArrow className="text-center">
      <div>{receivedDate}</div>
      <div>
        <Status 
          type={statusToTagName(status)}>
          { status }
        </Status>
      </div>
      <div>{phoneModel}</div>
      <div>{imei}</div>
      <div>{phoneCondition}</div>

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
