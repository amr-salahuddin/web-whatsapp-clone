import { useSelector } from "react-redux";
import NoneContent from "./Contents/NoneContent";
import { Box } from "@mui/material";
import ChatsContent from "./Contents/ChatsContent";

const Content = () => {
    const selectedChat = useSelector((state) => state.selectedChat);
    return (
        <Box height='100%' >
       {(selectedChat==null) && <NoneContent/>}
       {(selectedChat!=null) && <ChatsContent/>}
       </Box>
    );
};

export default Content;
