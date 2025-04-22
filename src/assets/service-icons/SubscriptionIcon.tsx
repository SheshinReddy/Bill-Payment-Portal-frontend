import { useTheme } from "@mui/material/styles";

function SubscriptionIcon() {
  const theme = useTheme();
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_157_837)">
        <path
          opacity="0.4"
          d="M15 2H9C8.20435 2 7.44129 2.31607 6.87868 2.87868C6.31607 3.44129 6 4.20435 6 5V19C6 19.7956 6.31607 20.5587 6.87868 21.1213C7.44129 21.6839 8.20435 22 9 22H15C15.7956 22 16.5587 21.6839 17.1213 21.1213C17.6839 20.5587 18 19.7956 18 19V5C18 4.20435 17.6839 3.44129 17.1213 2.87868C16.5587 2.31607 15.7956 2 15 2Z"
          fill={theme.palette.icon.primary}
        />
        <path
          d="M18.67 5.33002H18.33C18.21 5.33002 18.1 5.33002 17.98 5.34002C17.9922 5.39251 17.9989 5.44613 18 5.50002V18.5C17.9989 18.5539 17.9922 18.6075 17.98 18.66C18.09 18.67 18.2 18.67 18.33 18.67H18.67C21.33 18.67 22 18 22 15.33V8.67002C22 6.00002 21.33 5.33002 18.67 5.33002Z"
          fill={theme.palette.icon.primary}
        />
        <path
          d="M6 18.5V5.50002C6.0011 5.44613 6.0078 5.39251 6.02 5.34002C5.9 5.33002 5.79 5.33002 5.67 5.33002H5.33C2.67 5.33002 2 6.00002 2 8.67002V15.33C2 18 2.67 18.67 5.33 18.67H5.67C5.79 18.67 5.9 18.67 6.02 18.66C6.0078 18.6075 6.0011 18.5539 6 18.5Z"
          fill={theme.palette.icon.primary}
        />
      </g>
      <defs>
        <clipPath id="clip0_157_837">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SubscriptionIcon;
