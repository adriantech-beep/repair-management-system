// import styled, { css } from "styled-components";

import styled from "styled-components";
import { useSettings } from "../settings/useSettings";

const StyledButton = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;

  /* Primary variation */
  background: ${({ $variation, $colors }) => {
    if ($variation === 'primary') return $colors.primary;
    if ($variation === 'danger') return $colors.danger;
    if ($variation === 'secondary') return 'transparent';
    return 'var(--color-grey-100)';
  }};

  color: ${(props) =>
    props.$variation === "primary"
      ? "white"
      : props.$variation === "danger"
      ? "white"
      : props.$colors[props.$variation] || props.$colors.primary};

  border: 2px solid
    ${(props) => props.$colors[props.$variation] || props.$colors.primary};

  &:hover {
    opacity: 0.9;
  }
`;

function Button({ children, onClick, variation }) {
  const { settings } = useSettings();
  const { primary_color } = settings ?? {};

  // Define colors for different variations
  const colors = {
    primary: primary_color || "var(--color-brand-50)",
    secondary: "#6c757d",
    danger: "#dc3545",
    default: primary_color || "var(--color-brand-50)",
  };

  return (
    <StyledButton $variation={variation} $colors={colors} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

export default Button;
