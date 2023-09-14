import classes from "./MainNavigation.module.css";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/index";
import { useRouter } from "next/router";
import { loginActions } from "@/store/login-slice";

function MainNavigation() {
  const loggedIn: boolean = useSelector(
    (state: RootState) => state.login.loggedIn
  );

  const dispatch = useDispatch();

  const router = useRouter();
  const logoutHandler = () => {
    dispatch(loginActions.toggle());
    router.push("/");
  };

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Schedula</div>
      {loggedIn && (
        <nav>
          <ul>
            <li>
              <Link href="/home">Home</Link>
            </li>
            <li>
              <Link href="/myAppointments">My Appointments</Link>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default MainNavigation;
