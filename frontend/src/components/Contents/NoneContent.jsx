import { Box, Typography, useTheme } from "@mui/material";
import { WhatsAppNoContent, WLock } from "../../svgs/WhatsAppIcons";

function NoneContent () {
    const theme = useTheme();

    const alt = theme.palette.background.alt;

    return (
        <Box display='flex' alignItems='center' flexDirection='column' height='100vh'  bgcolor={alt}   >
            <Box mt={16}>
                <Box display='flex' justifyContent={'center'}>
                    <WhatsAppNoContent />
                </Box>
                <Typography variant='h2' textAlign={'center'} mt={4} color={theme.palette.primary.main}>
                    WhatsApp Web
                </Typography>
                <Typography mt={2} variant='h6' fontWeight={200} textAlign={'center'} color={theme.palette.primary.light}>
                    Send and receive messages without keeping your phone online.<br />
                    Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
                </Typography>



                <Typography mt={11} variant='h6' align="center" textAlign={'center'} fontWeight={200} color={theme.palette.primary.light}  >
                    <Box pt={1} mt={1} mx={0.5} component='span'>
                        <WLock />
                    </Box>

                    Your personal messages are end-to-end encrypted</Typography>
            </Box>
        </Box>
    );
}
            

export default NoneContent