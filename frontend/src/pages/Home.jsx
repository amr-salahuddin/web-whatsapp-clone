import { Box } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";
import { AttachEmail } from "@mui/icons-material";
import Options from "../components/Options";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSelectedChat } from "../state/first";


function Home() {

    //on click esc set selectedChat to null
    const dispatch = useDispatch();
    useEffect(() => {


        const handleKeyDown = (event) => {

            if (event.key === 'Escape') {
                dispatch(setSelectedChat({ id: null }))
            }
        }

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        }
    },[])

    return (
        <Box sx={{ display: 'flex', justifyContent: "space-between", minHeight:'100vh', overflow:'auto'}}>
            <Box flex={5}   minHeight='100%'>
                <Sidebar />
            </Box>
            <Box   flex={40} minHeight='100%' minWidth='300px' >
                <Options />
            </Box>
            <Box flex={55} minHeight='100%' minWidth='600px' >
                <Content />
            </Box>
        </Box>
    )
}

export default Home