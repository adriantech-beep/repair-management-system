import styled from "styled-components";

import { useSearchParams } from "react-router-dom";
import { useAssignee } from '../assignee/useAssignee';

const TechnicianOptions = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-grey-100);
`;

const StyledButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  border: 1px solid var(--color-grey-300);
  gap: 0.2em;
`;

const Button = styled.button`
  border: 1px solid var(--color-grey-300);
  text-align: center;
  background-color: var(--color-grey-100);

  &:hover {
    color: var(--color-green-700);
    background-color: var(--color-grey-100);
  }
`;

function SelectAssignee() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { technicians } = useAssignee();

  const filterField = "assignee";
  const options = technicians && technicians.length && technicians.map((technician, techIndex) => ({
    value: technician.id,
    label: technician.name || `Technician 00${techIndex}`
  }));

  function handleClick(value) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }
  return (
    <TechnicianOptions>
      <StyledButtonGroup>
        {
          options.map((option) => (
            <Button key={option.value} onClick={() => handleClick(option.value)}>
              {option.label}
            </Button>
          ))
        }
      </StyledButtonGroup>
    </TechnicianOptions>
  );
}

export default SelectAssignee;
