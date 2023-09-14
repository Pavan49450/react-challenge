import style from "./Login.module.css";
import useInput from "../hooks/use-Input";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/index";
import { loginActions } from "../../store/login-slice";

const emailValidation = (value: string) =>
  value.trim().length >= 3 && value.includes("@");

const passwordValidation = (value: string) => value.trim().length >= 8;

const LoginInput = () => {
  const loggedIn: boolean = useSelector(
    (state: RootState) => state.login.loggedIn
  );

  const dispatch = useDispatch();
  const router = useRouter();

  const [formIsValid, setFormIsValid] = useState<boolean>(false);

  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameIsInvalid,
    valueChangeHandler: nameChangeHandler,
    validateValueHandler: validateNameHandler,
    focusHandler: nameFocusHandler,
    isFocused: nameIsFocused,
    reset: nameReset,
  } = useInput({ validateValue: emailValidation });

  const {
    value: enteredPassword,
    isValid: passwordIsValid,
    hasError: passwordIsInvalid,
    valueChangeHandler: passwordChangeHandler,
    validateValueHandler: validatePasswordHandler,
    focusHandler: passwordFocusHandler,
    isFocused: passwordIsFocused,
    reset: passwordReset,
  } = useInput({ validateValue: passwordValidation });

  useEffect(() => {
    setFormIsValid(nameIsValid && passwordIsValid);
  }, [nameIsValid, passwordIsValid]);

  const inputNameClasses = nameIsInvalid
    ? `${style.Checkout_formControl} ${style.invalid}`
    : style.Checkout_formControl;

  const nameInvalidClasses = nameIsInvalid
    ? `${style.invalid_msg} ${style.show}`
    : style.invalid_msg;

  const inputPasswordClasses = passwordIsInvalid
    ? `${style.Checkout_formControl} ${style.invalid}`
    : style.Checkout_formControl;

  const passwordInvalidClasses = passwordIsInvalid
    ? `${style.invalid_msg} ${style.show}`
    : style.invalid_msg;

  const formInvalidClasses = !formIsValid
    ? `${style.submitBtn} ${style.disabled}`
    : style.submitBtn;

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (formIsValid) {
      router.push("home");
    } else if (!nameIsValid) {
      console.log("Enter proper email");
      alert("Enter proper email");
    } else if (!passwordIsValid) {
      alert("Password should be atleast 8 characters");
      console.log("Password should be atleast 8 characters");
    }
    dispatch(loginActions.toggle());
  };

  return (
    <>
      <div className={style.loginForm}>
        <form className={style.form} onSubmit={submitHandler}>
          <input
            className={inputNameClasses}
            type="email"
            placeholder="Enter your Name"
            value={enteredName}
            onBlur={validateNameHandler}
            onFocus={nameFocusHandler}
            onChange={nameChangeHandler}
            style={{
              borderBottom: !(nameIsFocused || nameIsValid)
                ? "4px solid grey"
                : nameIsValid
                ? "4px solid green"
                : "4px solid red",
            }}
          />
          <p className={nameInvalidClasses}>
            Please enter a valid email address.
          </p>
          <input
            className={inputPasswordClasses}
            type="password"
            placeholder="Password"
            value={enteredPassword}
            onBlur={validatePasswordHandler}
            onFocus={passwordFocusHandler}
            onChange={passwordChangeHandler}
            style={{
              borderBottom: !(passwordIsFocused || passwordIsValid)
                ? "4px solid grey"
                : passwordIsValid
                ? "4px solid green"
                : "4px solid red",
            }}
          />
          <p className={passwordInvalidClasses}>
            Password must be at least 8 characters long.
          </p>
          <button className={formInvalidClasses} disabled={!formIsValid}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginInput;
