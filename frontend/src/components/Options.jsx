import { Box, useTheme } from "@mui/material";
import ChatsOption from "./ContentOptions/ChatsOption";
import { useSelector } from "react-redux";
import Status from "./ContentOptions/Status";

function Options() { 
    
    const theme = useTheme();
    const option = useSelector((state) => state.selectedSideButton)
    const alt = theme.palette.background.alt
    //disable selection

    return (
        <Box   sx={{userSelect:'none'}}   height={'100%'}>
            {option === 0 && <ChatsOption/>}
            {option === 1 && <Status/>}
        </Box>
    )
}

export default Options;