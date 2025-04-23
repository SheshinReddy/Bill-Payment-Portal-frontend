import { Box, Stack, useTheme } from "@mui/material";
import { useState } from "react";
import PupilPayIcon from "../../../assets/logos/PupilPayIcon";
import { sideBarCategories } from "../../../data/globalData";
import LogInSideBar from "./LogInSideBar";
import SideBarComponent from "./SideBarComponent";

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
      }}
    >
      <Stack direction="column">
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

        <Stack
          direction="column"
          sx={{
            // justifyContent: "space-between",
            justifyContent: "space-around",
          }}
        >
          <Stack direction="column" spacing="12px">
            {sideBarCategories.map((category, index) => {
              const Icon = category.icon;
              return (
              <div key={index}>
                <SideBarComponent
                  className={category.text === "Pay Bills" ? "active" : ""}
                  icon={Icon}
                  text={category.text}
                  onClick={handleClick}
                />
              </div>
            )})}
          </Stack>
        </Stack>
      </Stack>
      <LogInSideBar />
    </Stack>
  );
}

export default HomePageSideBar;
