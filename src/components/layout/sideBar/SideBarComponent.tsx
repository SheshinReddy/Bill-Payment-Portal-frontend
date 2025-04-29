import { alpha, Box, Stack, Typography, useTheme } from "@mui/material"
import React from "react";
import { useLocation } from "react-router-dom";

export interface SideBarProps {
    icon: React.FC;
    text: string;
    className: string;
    onClick: () => void;
}

function SideBarComponent({ icon, text, className, onClick }: SideBarProps) {
    const theme = useTheme();
    const url = useLocation();
    const Icon = icon;
    
    if(url.pathname === "/transactions") {
        console.log("THis is hte url");
        console.log(url);
    }
    
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
                margin: "0 12px",
                "&:hover": {
                    backgroundColor: alpha(theme.palette.icon.primary, 0.5),
                    cursor: "pointer",
                    borderRadius: "8px",
                    transition: "all 0.3s ease"
                },
                "&.active" : {
                    backgroundColor: alpha(theme.palette.icon.primary, 0.5),
                    boxShadow: "0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)",
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