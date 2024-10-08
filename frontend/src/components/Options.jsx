import { Box, useTheme } from "@mui/material";
import ChatsOption from "./ContentOptions/ChatsOption";
import { useSelector } from "react-redux";
import Status from "./ContentOptions/Status";
import Profile from "./ContentOptions/Profile";

function Options() { 
    
    const theme = useTheme();
    const option = useSelector((state) => state.selectedSideButton)
    const alt = theme.palette.background.alt
    //disable selection

    return (
        <Box   sx={{userSelect:'none'}} height='100%'  minHeight={'600px'}>
            {option === 0 && <ChatsOption/>}
            {option === 1 && <Status/>}
            {option === 5 && <Profile/>}
        </Box>
    )
}

export default Options;