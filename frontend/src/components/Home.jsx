
<<<<<<< HEAD
import Logoicon from '@mui/icons-material/WhatsApp';
import SearchIcon from '@mui/icons-material/Search';
import FaceIcon from '@mui/icons-material/Face';
import { MultiAvatars } from '../assets/utilityComponents/MultiAvatars';
import DuoIcon from '@mui/icons-material/Duo';
import CallIcon from '@mui/icons-material/Call';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import AttachmentIcon from '@mui/icons-material/Attachment';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

import { motion } from "framer-motion"; // Correct import
import MessageInput from '../assets/utilityComponents/messageBox';
import Message from '../assets/utilityComponents/MessageContainer';
import MessageContainer from '../assets/utilityComponents/MessageContainer';
import { useState } from 'react';
import Sidebar from '../assets/utilityComponents/Sidebar';
import SimpleDialogDemo from '../assets/utilityComponents/DialogBox';



const Home = () => {
    const kya="Pankaj Nunnu"
    const [name,setName]=useState("Pankaj Nunnu")
    return (
        <>
            <div className="w-full h-screen overflow-hidden font-mono" style={{ fontFamily: 'Poppins' }}>
                <div className="flex flex-row w-full h-16 ">
                    <div className="rounded-1xl text-center w-1/5 p-4 border-2 border-solid flex justify-start max-md:hidden">
                        <Logoicon className="text-cyan-600 mx-3 hover:text-cyan-800 cursor-pointer" />
                        <span>Mingle</span>
                    </div>
                    <div className="items-center  text-center w-1/3 p-4 border-2 border-solid flex justify-between max-sm:hidden">
                        <span className=" text-xl font-extrabold max-md:text-sm max-sm:text-xs" >{`${kya}...`}</span>
                        <div>
                            <SearchIcon className="hover:text-cyan-600 cursor-pointer" onClick={() => alert("clicked search")} />
                        </div>
                    </div>
                    <div className="rounded-1xl text-center w-2/3 p-4 flex justify-between border-2 border-solid max-sm:h-full max-sm:w-full">
                        <FaceIcon className="text-cyan-600 cursor-pointer" />
                        <span>{name}</span>
                        <div>
                            <DuoIcon className="hover:text-cyan-700 mx-1 cursor-pointer" />
                            <CallIcon className="hover:text-cyan-700 mx-1 cursor-pointer" />
                            {/*<MoreHorizIcon className="hover:text-cyan-700 mx-1 cursor-pointer" /> */}
                            <SimpleDialogDemo/>
                        </div>
                    </div>
                </div>

                {/* Main Content Wrapper */}
                <div className=" flex w-full h-[calc(100vh-4rem)]">
                    {/* Sidebar */}
                   <Sidebar/>

                    {/* Content Sections */}
                    <div className="w-1/3 border-2 text-center p-4 border-solid flex justify-center items-center max-sm:hidden">
                        sw
                    </div>


                    <div className="w-2/3 border-2 p-4 border-solid flex flex-col  justify-between max-sm:h-full max-sm:w-full">
                        
                        <motion.div className="flex flex-col gap-2 overflow-y-scroll scrollbar-hidden" animate={{ y: [0, -100, 0] }} transition={{ ease: "easeInOut", duration: 0.5 }}>
                            <MessageContainer message={"hi what are u doing"} fromMe={true}/>
                            <MessageContainer message={"nothing"} fromMe={false}/>
                            <MessageContainer message={"ohk"} fromMe={true}/>
                            <MessageContainer message={"i am now at home by the way"} fromMe={false}/>
                            <MessageContainer message={"ohk"} fromMe={true}/>
                            <MessageContainer message={"i am now at home by the way"} fromMe={false}/>
                            <MessageContainer message={"ohk"} fromMe={true}/>
                            <MessageContainer message={"i am now at home by the way"} fromMe={false}/>
                            <MessageContainer message={"ohk"} fromMe={true}/>
                            <MessageContainer message={"i am now at home by the way"} fromMe={false}/>
                            <MessageContainer message={"ohk"} fromMe={true}/>
                            <MessageContainer message={"i am now at home by the way"} fromMe={false}/>
                            <MessageContainer message={"ohk"} fromMe={true}/>
                            <MessageContainer message={"i am now at home by the way"} fromMe={false}/>
                            
                        </motion.div>
                        {/* CHAT BOX */}
                        <MessageInput/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
=======
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
const Home=()=>{
    const [darkMode, setDarkMode] = useState(true);

  return (
    <div
      className={`relative min-h-screen flex flex-col items-center justify-center transition-all duration-500 ${darkMode ? "bg-gradient-to-r from-richblack-900 to-gray-900" : "bg-gradient-to-r from-gray-100 to-gray-300"}`}
    >
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center z-[-1] " style={{ backgroundImage: "url('https://thumbs.dreamstime.com/z/dynamic-mosaic-colorful-social-media-icons-dark-background-digital-marketing-insights-dynamic-mosaic-colorful-333029660.jpg?ct=jpeg')" }}></div>
      
      {/* Dark Mode Toggle */}
      <button
        className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-lg rounded-full shadow-lg hover:scale-110 transition"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-800" />}
      </button>
      
      {/* Glassy Container */}
      <div className="max-w-3xl p-10 text-center bg-white/10 backdrop-blur-xl shadow-2xl rounded-2xl border border-white/20 transition-all duration-500">
        <h1 className="text-4xl font-extrabold text-white drop-shadow-lg">Welcome to Mingle</h1>
        <p className="mt-4 text-lg text-gray-300 italic">"Connecting people, building relationships."</p>
        
        <div className="mt-6 flex gap-4">
          <Link to="/signup" className="px-6 py-3 text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl shadow-lg hover:scale-105 transition-all">Sign Up</Link>
          <Link to="/login" className="px-6 py-3 text-lg font-semibold bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-xl shadow-lg hover:scale-105 transition-all">Login</Link>
        </div>
      </div>
    </div>
  );
}
>>>>>>> 11dc8b690142b8588c7fbcc3b49d58fa0470dc4a

