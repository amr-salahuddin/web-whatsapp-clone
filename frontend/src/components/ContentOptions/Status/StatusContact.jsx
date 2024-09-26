import { useTheme } from "@emotion/react";
import { Avatar, Box, Typography } from "@mui/material"
import { WMuted, WPinned } from "../../../svgs/WhatsAppIcons";

function StatusContact() {

    const theme = useTheme();
    const alt = theme.palette.background.alt;
    const green = theme.palette.primary.green;
    const light = theme.palette.primary.light;
    return (
        <Box px={2} sx={{ ':hover': { backgroundColor: `${alt}`,cursor:'pointer' } }} display='flex' alignItems='center' width='100%'>
            <Avatar />
            <Box  py={1.5} sx={{
                    borderTop: `1px solid ${alt}`,
                }} width='100%' ml={2} display='flex' justifyContent='space-between'>
                <Box>
                    <Typography variant="h5">sa</Typography>
                    <Typography variant="subtitle1">Today</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default StatusContact