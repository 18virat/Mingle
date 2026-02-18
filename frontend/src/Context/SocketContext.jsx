
import { createContext, useEffect, useState,useContext } from "react";
import { useSelector } from "react-redux";
import io from 'socket.io-client';

export const SocketContext = createContext();

export const useSocketContext = () => {
    return useContext(SocketContext);
}
export const SocketProvider = (props) => {
    const { user } = useSelector(state => state.userReducer);
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);

   

    useEffect(() => {
       

        if (user) {
            // console.log("Creating socket...");
            const newSocket = io("https://mingle-5fgl.onrender.com",{
                query: {
                    userId: user._id,
                },
            });
            setSocket(newSocket);

            newSocket.on("onlineUsers", (users) => {
                setOnlineUsers(users);
            });
            console.log("o",onlineUsers);
             return () => {
                newSocket.close();
            };
        } else {
           
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }
    }, [user]);

    return (
        <SocketContext.Provider value={{ socket, onlineUsers }}>
            {props.children}
        </SocketContext.Provider>
    );
};
