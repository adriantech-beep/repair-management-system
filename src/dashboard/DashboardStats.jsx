import styled from "styled-components";
import { formatCurrency } from "../helpers/formatCurrency";
import Stat from "../ui/Stat";

const StyledDashboardStats = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2em;
  height: 15rem;
`;

function DashboardStats({ phones }) {
  const numPhones = (phones ?? []).length;
  const sales = (phones ?? [])
    .filter((phone) => phone.success === true)
    .reduce((acc, cur) => acc + cur.cost, 0);

  return (
    <StyledDashboardStats>
      <Stat title="Phones" value={numPhones} />
      <Stat title="Sales" value={formatCurrency(sales)} />
    </StyledDashboardStats>
  );
}

export default DashboardStats;
