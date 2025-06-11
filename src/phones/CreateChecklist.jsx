import styled from "styled-components";
import Switcher from "../ui/Switcher";

import { jobOrderChecklist } from "../utilities/constants";

const StyledCheckListForm = styled.div`
  width: 80rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const CheckListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.2rem;
  h3 {
    font-weight: 600;
    font-size: 1.8rem;
    margin-bottom: 0.5em;
  }
`;

const renderChecklist = ( register, handleCheckboxChange, type='accessories' ) => {
  return jobOrderChecklist
    .filter((item) => item.type === type)
    .map(( checklistItem ) => {
      const { name, label } = checklistItem;

      return (
        <div className="flex">
          <label htmlFor={ name }>{`With ${label}`}</label>
          <Switcher 
            id={ name }
            name
            {...register( name )}
            onChange={handleCheckboxChange}
          />
        </div>
      )
  })
}

function CreateChecklist({ handleCheckboxChange, register }) {
  return (
    <StyledCheckList>
      <CheckList>
        <h3 className="text-2xl mb-4">Accesssories</h3>
        { renderChecklist( register, handleCheckboxChange, 'accessories' ) }
      </CheckList>
      <CheckList>
        <h3 className="text-2xl mb-4">Physical Condition</h3>
        { renderChecklist( register, handleCheckboxChange, 'condition' ) }
      </CheckList>
    </StyledCheckList>
  );
}

export default CreateChecklist;
