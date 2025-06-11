import { useAssignee } from "./useAssignee";
import styled from "styled-components";
import AssignedRow from "./AssignedRow";
import Menus from "../ui/Menus";
import Table from "../ui/Table";
import Loader from "../ui/Loader";

const StyledAssignedRepairs = styled.div`
  width: 100%;
`;

function AssignedRepairs() {
  const { isLoading, assignedRepairs } = useAssignee();

  if (isLoading) return <Loader />;
  return (
    <StyledAssignedRepairs>
      <Menus>
        <Table columns="0.26fr 0.25fr 0.25fr 0.3fr 0.4fr 0.15fr">
          <Table.Header>
            <div>Date</div>
            <div>Status</div>
            <div>Model</div>
            <div>IMEI</div>
            <div>Phone problem</div>
            <div>Action</div>
          </Table.Header>

          <Table.Body
            data={assignedRepairs ?? []}
            render={(tech) => <AssignedRow key={tech.id} tech={tech} />}
          />
        </Table>
      </Menus>
    </StyledAssignedRepairs>
  );
}

export default AssignedRepairs;
