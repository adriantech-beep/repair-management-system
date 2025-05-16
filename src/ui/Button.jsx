import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);

    &:hover {
      background-color: var(--color-brand-700);
    }
  `,
  secondary: css`
    color: var(--color-grey-600);
    background: var(--color-brand-0);
    border: 1px solid var(--color-brand-200);

    &:hover {
      background-color: var(--color-grey-200);
    }
  `,

  tertiary: css`
    color: var(--color-brand-100);
    background: var(--color-brand-800);
    border: 1px solid var(--color-brand-200);
    padding: 0.4em 0.6em;

    &:hover {
      background-color: var(--color-brand-700);
    }
  `,

  quaternary: css`
    color: var(--color-brand-100);
    background: var(--color-green-700);
    border: 1px solid var(--color-grey-200);
    padding: 0.4em 0.6em;

    &:hover {
      background-color: var(--color-green-800);
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-600);

    &:hover {
      background-color: var(--color-red-700);
    }
  `,
};

const Button = styled.button`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  padding: 0.2em 0.5em;

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
`;

Button.defaultProps = {
  variation: "primary",
  size: "medium",
};

export default Button;
