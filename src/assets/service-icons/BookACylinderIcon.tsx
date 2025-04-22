import { useTheme } from "@mui/material/styles";

function BookACylinderIcon() {
  const theme = useTheme();
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_148_398)">
        <path
          d="M8.5 2.5C8.5 2.22386 8.72386 2 9 2H15C15.2761 2 15.5 2.22386 15.5 2.5C15.5 2.77614 15.2761 3 15 3H9C8.72386 3 8.5 2.77614 8.5 2.5Z"
          fill={theme.palette.icon.primary}
        />
        <path
          d="M8.5 21H15.5C15.5 21.5523 15.0523 22 14.5 22H9.5C8.94772 22 8.5 21.5523 8.5 21Z"
          fill={theme.palette.icon.primary}
        />
        <path
          d="M10 2C10.2761 2 10.5 2.22386 10.5 2.5L10.5 5H9.5L9.5 2.5C9.5 2.22386 9.72386 2 10 2Z"
          fill={theme.palette.icon.primary}
        />
        <path
          d="M14 2C14.2761 2 14.5 2.22386 14.5 2.5L14.5 5H13.5L13.5 2.5C13.5 2.22386 13.7239 2 14 2Z"
          fill={theme.palette.icon.primary}
        />
        <rect x="6.5" y="11" width="11" height="4" fill={theme.palette.icon.primary} />
        <rect
          x="6.5"
          y="5"
          width="11"
          height="16"
          rx="2"
          fill={theme.palette.icon.primary}
          fillOpacity="0.4"
        />
      </g>
      <defs>
        <clipPath id="clip0_148_398">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default BookACylinderIcon;
