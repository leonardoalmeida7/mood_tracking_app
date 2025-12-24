import { FormGroup } from "../FormGroup";
import { DefaultButton } from "../../ui/DefaultButton";
import { authText } from "../../assets/data/authText";
import { Link } from "react-router-dom";
import { useFormSubmit } from "../../Hooks/useFormSubmit";
import { useRegister } from "../../contexts/RegisterContext";

import styles from "./styles.module.css";

type AccountContainerProps = {
  route: "login" | "register";
};

export const AccountContainer = ({ route }: AccountContainerProps) => {
  const { formSubmit, errorMessage } = useFormSubmit();
  const { email, setEmail, password, setPassword } = useRegister();


  return (
    <main className={`${styles.container}`}>
      <div>
        <h1>{authText[route].title}</h1>
        <p>{authText[route].subtitle}</p>
      </div>
      <form onSubmit={(e) => formSubmit(e, route)}>
        <FormGroup
          labelText="Email Address"
          type="email"
          id="email"
          name="email"
          placeholder="name@mail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          errorMessage={errorMessage.emailField}
        />
        <FormGroup
          labelText="Password"
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          errorMessage={errorMessage.passwordField}
        />
        <DefaultButton type="submit">
          {authText[route].buttonText}
        </DefaultButton>
      </form>
      <p>
        Haven't got an account?{" "}
        <span>
          <Link to={`/auth/${authText[route].mode}`}>Sign up.</Link>
        </span>
      </p>
    </main>
  );
};
