import { Box, Stack, Typography, useTheme } from "@mui/material"
import "../styles/SideBarComponent.css";

export interface SideBarProps {
    icon: string;
    text: string;
    className: string;
    onClick: () => void;
}

function SideBarComponent({ icon, text, className, onClick }: SideBarProps) {
    const theme = useTheme();
    return (
        <Stack
            className={`sidebar-component-container ${className}`}
            direction="row"
            gap="12px"
            onClick={onClick}
            sx={{
                padding: "12px 16px",
                alignItems: "center",
                justifyContent: "flex-start",
                "&:hover": {
                    cursor: "pointer",
                }
            }}
        >
            <Box>
                <img
                    src={icon}
                    alt={text}
                />
            </Box>
            <Typography
                sx={{
                    fontWeight: 500,
                    fontSize: "16px",
                    color: theme.palette.primary.contrastText,
                }}
            >
                {text}
            </Typography>
        </Stack>
    )
}

export default SideBarComponent;