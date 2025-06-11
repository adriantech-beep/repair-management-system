import { useState } from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import StyledNavLink from "./StyledNavLink";
import SelectAssignee from "../assignee/SelectAssignee";

function AssigneeNav() {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <li onClick={() => setShowOptions(!showOptions)}>
      <StyledNavLink to="/assignee">
        <HiOutlineCalendarDays />
        <span>Technicians</span>
        {showOptions ? <MdArrowDropUp /> : <MdArrowDropDown />}
      </StyledNavLink>

      {showOptions && <SelectAssignee />}
    </li>
  );
}

export default AssigneeNav;
