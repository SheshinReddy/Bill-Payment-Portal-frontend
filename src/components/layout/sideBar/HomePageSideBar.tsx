import { Box, Stack, useTheme } from "@mui/material";
import { useState } from "react";
import PupilPayIcon from "../../../assets/logos/PupilPayIcon";
import { sideBarCategories } from "../../../data/globalData";
import LogInSideBar from "./LogInSideBar";
import SideBarComponent from "./SideBarComponent";
import { Link } from "react-router-dom";

function HomePageSideBar() {
  const theme = useTheme();

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <Stack
      sx={{
        position: "sticky",
        top: 0,
        minWidth: { xs: "0px", md: "280px" },
        minHeight: "100vh",
        height: "100%",
        backgroundColor: theme.palette.primary.main,
        justifyContent: "space-between",
        display: { xs: "none", md: "flex" },
        pb: "20px",
        boxSizing: "border-box",
      }}
    >
      <Stack direction="column">
        <Link to="/">
          <Box
            className="logo"
            onClick={() => console.log("clicked pupil pay icon")}
            sx={{
              margin: "50px 0 80px 10px",
              padding: "0 16px",
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            <PupilPayIcon />
          </Box>
        </Link>

        <Stack
          direction="column"
          sx={{
            justifyContent: "space-around",
          }}
        >
          <Stack direction="column" spacing="12px">
            {sideBarCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Link key={index} to={category.path || ""} style={{textDecoration: "none", color: "inherit"}}>
                  <SideBarComponent
                    className={category.text === "Pay Bills" ? "active" : ""}
                    icon={Icon}
                    text={category.text}
                    onClick={handleClick}
                  />
                </Link>
              );
            })}
          </Stack>
        </Stack>
      </Stack>
      {/* Login sidebar without Link wrapper */}
      <LogInSideBar />
    </Stack>
  );
}

export default HomePageSideBar;