import styled from "styled-components";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utilities/constants";
import { useSettings } from "../settings/useSettings";

const StyledPagination = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const P = styled.p`
  font-size: 1.4rem;
  margin-left: 0.8rem;
  display: flex;
  gap: 1em;

  & span {
    font-weight: 600;
  }
`;

const Buttons = styled.div`
  display: flex;
`;
const PaginationButton = styled.button`
  background-color: ${(props) =>
    props.$active ? "var(--color-grey-50)" : props.$colors.primary};
  color: ${(props) => (props.$active ? "var(--color-grey-0)" : "white")};
  border: none;
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.6rem 1.2rem;
  transition: all 0.3s;

  &:has(span:last-child) {
    padding-left: 0.4rem;
  }

  &:has(span:first-child) {
    padding-right: 0.4rem;
  }

  & svg {
    height: 1.8rem;
    width: 1.8rem;
  }

  &:hover:not(:disabled) {
    background-color: ${(props) => props.$colors.primary};
    color: white;
  }
`;

function Pagination({ count }) {
  const { settings } = useSettings();
  const { primary_color } = settings ?? {};

  const colors = {
    primary: primary_color,
  };

  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;

    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  return (
    <StyledPagination>
      <Buttons>
        <PaginationButton
          onClick={prevPage}
          $colors={colors}
          $active={currentPage === 1}
        >
          <IoMdArrowDropleft />
          <span>Previous</span>
        </PaginationButton>
      </Buttons>

      <P>
        Showing <span>{(currentPage - 1) * PAGE_SIZE + 1}</span> to{" "}
        <span>
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{" "}
        of{" "}
        <span>{count}</span> results
      </P>

      <Buttons>
        <PaginationButton
          onClick={nextPage}
          $colors={colors}
          $active={currentPage === pageCount}
        >
          <span>Next</span>
          <IoMdArrowDropright />
        </PaginationButton>
      </Buttons>
    </StyledPagination>
  );
}

export default Pagination;
