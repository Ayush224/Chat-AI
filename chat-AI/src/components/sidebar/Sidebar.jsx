import {
  CircleHelp,
  History,
  Menu,
  MessageSquare,
  Plus,
  Settings,
} from "lucide-react";
import { useContext, useState } from "react";
import { context } from "../../context/Context";
import './sidebar.css'

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const { onSent, prevPrompt, setRecPrompt, newChat } = useContext(context);

  const prevSearch = async (prompt) => {
    setRecPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div className="sidebar min-h-[100vh] inline-flex flex-col justify-between bg-gray-200 py-6 px-4">
      {/* sidebar top icons */}
      <div>
        <Menu
          onClick={() => setOpen((prev) => !prev)}
          className="block ml-2.5 cursor-pointer"
        />
        <div onClick={() => newChat()} className="mt-12 inline-flex items-center gap-2.5 py-2.5 px-4 bg-gray-300 rounded-4xl text-xl text-grey cursor-pointer">
          <Plus />
          {open ? <p>new chat</p> : null}
        </div>
        {open ? (
          <div className="flex flex-col ">
            <p className="mt-7 mb-5">Recent</p>
            {prevPrompt.map((item, index) => {
              return (
                <div onClick={() => prevSearch(item)} className="flex items-start gap-2.5 p-2.5 pr-10 rounded-4xl text-gray-900 cursor-pointer hover:bg-gray-300">
                  <MessageSquare />
                  <p>{item.slice(0, 20)}...</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>

      {/* sidebar bottom area */}
      <div>
        <div className="flex items-start gap-2.5 p-2.5 pr-7 rounded-4xl text-gray-900 cursor-pointer hover:bg-gray-300">
          <CircleHelp />
          {open ? <p>Help</p> : null}
        </div>
        <div className="flex items-start gap-2.5 p-2.5 pr-7 rounded-4xl text-gray-900 cursor-pointer hover:bg-gray-300">
          <History />
          {open ? <p>History</p> : null}
        </div>
        <div className="flex items-start gap-2.5 p-2.5 pr-7 rounded-4xl text-gray-900 cursor-pointer hover:bg-gray-300">
          <Settings />
          {open ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
