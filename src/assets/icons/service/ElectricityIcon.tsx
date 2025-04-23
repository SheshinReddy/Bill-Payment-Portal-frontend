  import { useTheme } from "@mui/material/styles";

  function ElectricityIcon() {
    const theme = useTheme();
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_30_787)">
          <path
            d="M11.9999 3.67001V20.33L11.1999 21.24C10.0899 22.5 9.17989 22.16 9.17989 20.48V13.28H6.08989C4.68989 13.28 4.29989 12.42 5.22989 11.37L11.9999 3.67001Z"
            fill={theme.palette.icon.primary}
          />
          <path
            opacity="0.4"
            d="M18.77 12.6299L12 20.3299V3.66987L12.8 2.75987C13.91 1.49987 14.82 1.83987 14.82 3.51987V10.7199H17.91C19.31 10.7199 19.7 11.5799 18.77 12.6299Z"
            fill={theme.palette.icon.primary}
          />
        </g>
        <defs>
          <clipPath id="clip0_30_787">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }

  export default ElectricityIcon;
