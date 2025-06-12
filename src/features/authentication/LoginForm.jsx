import { useState } from "react";
import { useLogin } from "./useLogin";

import styled from "styled-components";
import LogoComponent from "../../ui/Logo";
import BackgroundImage from "../../assets/background-image.jpg";
import SpinnerMini from "../../ui/SpinnerMini";
import Input from "../../ui/Input";
import Heading from "../../ui/Heading";
import ButtonSecondary from "../../ui/ButtonSecondary";

const StyledLoginForm = styled.div`
  width: 100%;
  max-width: 100%;
  height: 420px;

  display: flex;
  align-items: center;
`;

const FormSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
  gap: 0.2em;
`;
const LogoSection = styled.div`
  width: 100%;
  height: 100%;

  div {
    width: 100%;
    height: 100%;

    img {
      height: 100%;
    }
  }

  @media (max-width: 546px) {
    display: none;
  }
`;

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5em;
  width: 100%;
`;

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isPending } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;

    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }
  return (
    <StyledLoginForm>
      <FormSection>
        <div className="mb-20">
          <LogoComponent />
        </div>
        <div>
          <Heading as="h4">Please sign in to your account</Heading>
        </div>

        <StyledForm onSubmit={handleSubmit}>
          <label htmlFor="email"></label>
          <Input
            className="pt-10"
            type="email"
            id="email"
            placeholder="Email address"
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isPending}
          />
          <label htmlFor="password"></label>
          <Input
            type="password"
            id="password"
            placeholder="Password.."
            value={password}
            autoComplete="password"
            onChange={(e) => setPassword(e.target.value)}
            disabled={isPending}
          />
          <div className="w-100">
            <ButtonSecondary
              className="bg-green-800 text-white"
              size="large"
              disabled={isPending}
            >
              {!isPending ? "Log in" : <SpinnerMini />}
            </ButtonSecondary>
          </div>
        </StyledForm>
      </FormSection>

      <LogoSection>
        <div className="flex justify-center">
          <img src={BackgroundImage} />
        </div>
      </LogoSection>
    </StyledLoginForm>
  );
}

export default LoginForm;
