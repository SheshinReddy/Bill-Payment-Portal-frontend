import { Box, Stack, Typography, useTheme } from "@mui/material"
import "../../styles/SideBarComponent.css";
import React from "react";

export interface SideBarProps {
    icon: React.FC;
    text: string;
    className: string;
    onClick: () => void;
}

function SideBarComponent({ icon, text, className, onClick }: SideBarProps) {
    const theme = useTheme();
    const Icon = icon;
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
                    backgroundColor: theme.palette.customBackground.sideBar,
                    cursor: "pointer",
                    borderRadius: "8px",
                    transition: "all 0.3s ease"
                }
            }}
        >
            <Box
                sx={{
                    height: "24px",
                    width: "24px",
                }}
            >
                {Icon && <Icon/>}
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