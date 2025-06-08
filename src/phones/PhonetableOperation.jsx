import styled from "styled-components";
import SearchBar from "../ui/SearchBar";
import Filter from "../ui/Filter";
import SortBy from "../ui/SortBy";

const StyledTableOperations = styled.div`
  display: flex;
  gap: 1.6rem;
`;

function PhonetableOperation() {
  return (
    <StyledTableOperations>
      <Filter
        filterField="status"
        options={[
          { value: "all", label: "All" },
          { value: true, label: "Completed" },
          { value: false, label: "Ongoing" },
        ]}
      />

      <SortBy
        options={[
          { value: "all", label: "Assigned to all" },
          { value: "Tech-001", label: "Assigned to Tech-001" },
          { value: "Tech-002", label: "Assigned to Tech-002" },
        ]}
      />
    </StyledTableOperations>
  );
}

export default PhonetableOperation;
