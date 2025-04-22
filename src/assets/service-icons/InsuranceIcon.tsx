import { useTheme } from "@mui/material/styles";

function InsuranceIcon() {
  const theme = useTheme();
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_156_774)">
        <path
          opacity="0.4"
          d="M20.41 6.95999V9.80299L7.39997 19.34L4.76997 17.37C4.42348 17.0794 4.14007 16.721 3.93714 16.3169C3.73422 15.9128 3.61608 15.4714 3.58997 15.02L3.58997 6.95999C3.61902 6.36878 3.81344 5.7976 4.15111 5.31143C4.48877 4.82527 4.95611 4.44365 5.49997 4.20999L10.97 2.15999C11.6406 1.95001 12.3594 1.95001 13.03 2.15999L18.5 4.20999C19.0438 4.44365 19.5112 4.82527 19.8488 5.31143C20.1865 5.7976 20.3809 6.36878 20.41 6.95999Z"
          fill={theme.palette.icon.primary}
        />
        <path
          d="M20.4101 11.17V15.02C20.384 15.4714 20.2658 15.9128 20.0629 16.3169C19.86 16.721 19.5766 17.0794 19.2301 17.37L13.7601 21.46C13.2457 21.8224 12.6292 22.0116 12.0001 22C11.3709 22.0116 10.7545 21.8224 10.2401 21.46L8.32007 20.03L20.4101 11.17Z"
          fill={theme.palette.icon.primary}
        />
      </g>
      <defs>
        <clipPath id="clip0_156_774">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default InsuranceIcon;
