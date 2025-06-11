import styled from "styled-components";

const StyledStat = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Title = styled.h5`
  align-self: end;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-500);
`;

const Value = styled.h1`
  font-size: 3.8rem;
  line-height: 1;
  font-weight: 500;
`;

const Remarks = styled.p`
  font-size: 1.8rem;
`;

function Stat({ icon, title, value, remarks }) {
  return (
    <StyledStat>
      <Title>
        <span>{icon}</span>
        {title}
      </Title>
      <Value>{value}</Value>
      <Remarks>{remarks}</Remarks>
    </StyledStat>
  );
}

export default Stat;
