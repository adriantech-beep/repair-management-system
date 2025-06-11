import { useSuccessRepairs } from "./useSuccessRepairs";
import styled from "styled-components";
import Chart from "./Chart";
import PieChartComponent from "./PieChartComponent";
import DashboardStats from "./DashboardStats";
import Loader from "../ui/Loader";

const StyledDashboardContent = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(8, 1fr);
  gap: 8px;

  max-height: calc(100vh - 5rem);
`;

const StatWrapper = styled.div`
  grid-column: span 5 / span 5;
`;

const TaskWrapper = styled.div`
  grid-column: span 3 / span 3;
  grid-row: span 3 / span 3;
  grid-row-start: 2;
`;
const PieChartWrapper = styled.div`
  grid-column: span 2 / span 2;
  grid-row: span 3 / span 3;
  grid-column-start: 4;
  grid-row-start: 2;
`;
const GraphWrapper = styled.div`
  grid-column: span 5 / span 5;
  grid-row: span 4 / span 4;
  grid-row-start: 5;
`;

function DashboardContents() {
  const { isPending, phones, numDays } = useSuccessRepairs();

  if (isPending) return <Loader />;
  return (
    <StyledDashboardContent>
      <StatWrapper
        className="mt-10">
        <DashboardStats phones={phones} />
      </StatWrapper>

      {/* 
      FIXME:

      <TaskWrapper>For Bookings....to be added</TaskWrapper>
      <PieChartWrapper>
        <PieChartComponent />
      </PieChartWrapper>
      <GraphWrapper>
        <Chart phones={phones} numDays={numDays} />
      </GraphWrapper> 
      */}
    </StyledDashboardContent>
  );
}

export default DashboardContents;
