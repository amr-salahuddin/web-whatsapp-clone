import { createContext, useContext } from "react"
import io from "socket.io-client"

// @ts-ignore
const env = import.meta.env;


const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
    const socket = io(env.VITE_BACKEND_URL,[]);

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}


export const useSocket = () => useContext(SocketContext);

