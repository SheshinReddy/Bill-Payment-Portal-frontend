import { useTheme } from "@mui/material/styles";

function CableTvIcon() {
  const theme = useTheme();
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V15.1111H2V6Z"
        fill={theme.palette.icon.primary}
        fillOpacity="0.4"
      />
      <path
        d="M2 16.2222H22V16.4445C22 17.549 21.1046 18.4445 20 18.4445H4C2.89543 18.4445 2 17.549 2 16.4445V16.2222Z"
        fill={theme.palette.icon.primary}
      />
      <rect
        x="9.77783"
        y="18.4445"
        width="4.44444"
        height="1.11111"
        rx="0.555556"
        fill={theme.palette.icon.primary}
      />
    </svg>
  );
}

export default CableTvIcon;
