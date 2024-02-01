import React from 'react';
import calender from '../assets/navbar_icons/Calendar.png'
import dashboard from '../assets/navbar_icons/dashboard.png'
import invoice from '../assets/navbar_icons/Invoice.png'
import notification from '../assets/navbar_icons/Notification.png'
import schedule from '../assets/navbar_icons/Schedule.png'
import settings from '../assets/navbar_icons/Setting.png'
import upload from '../assets/navbar_icons/Upload.png'
import { useNavigate } from 'react-router-dom';


const NavBar = () => {

    const navigate = useNavigate()

  const navItems = [
    { name: 'Dashboard', img: dashboard, path:"/home/dashboard" },
    { name: 'Upload', img: upload , path:"/home/upload"},
    { name: 'Invoice', img: invoice , path:"/home/invoice"},
    { name: 'Schedule', img: schedule , path:"/home/schedule"},
    { name: 'Calendar', img: calender , path:"/home/calender"},
    { name: 'Notification', img: notification , path:"/home/notification"},
    { name: 'Settings', img: settings , path:"/home/setting"},
  ];

  return (
    <div className="h-screen w-64 text-[#9A9AA9] font-nunito font-semibold text-[16px] sm:w-[218px] bg-white">
      <ul className="space-y-8 pl-5 mt-32 ml-2">
        {navItems.map((item, index) => (
          <li key={index} className="text-xl cursor-pointer hover:underline flex items-center space-x-4">
            <img src={item.img} alt={item.name} className="h-6 w-6" />
            <span onClick={()=>navigate(item.path)}>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
