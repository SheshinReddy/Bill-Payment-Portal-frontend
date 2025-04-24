import { Link } from "react-router-dom";
import LoginIcon from "../../../assets/icons/navigation/LoginIcon";
import SideBarComponent from "./SideBarComponent";

function LogInSideBar() {
  return (
    <Link to="/login" style={{textDecoration: "none", color: "inherit"}}>
    <SideBarComponent
      icon={LoginIcon}
      text="Login to your Account"
      className="login-side-bar"
      onClick={() => {}}
    />
    </Link>
  );
}

export default LogInSideBar;
