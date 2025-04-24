import { useContext } from "react";
import LoginIcon from "../../../assets/icons/navigation/LoginIcon";
import SideBarComponent from "./SideBarComponent";
import { LoginContext } from "../../../context/LoginContext";

function LogInSideBar() {
  const { openLoginBanner } = useContext(LoginContext);

  const handleLoginClick = () => {
    openLoginBanner();
  };

  return (
    <SideBarComponent
      icon={LoginIcon}
      text="Login to your Account"
      className="login-side-bar"
      onClick={handleLoginClick}
    />
  );
}

export default LogInSideBar;