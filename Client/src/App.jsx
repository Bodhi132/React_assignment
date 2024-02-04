import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from 'axios'
import SignUp from "./Page/SignUp"
import Home from './Page/Home'
import Dashboard from "./Page/Subpages/Dashboard";
import Calender from "./Page/Subpages/Calender";
import Invoice from "./Page/Subpages/Invoice";
import Notification from "./Page/Subpages/Notification";
import Upload from "./Page/Subpages/Upload";
import Setting from "./Page/Subpages/Setting";
import Schedule from "./Page/Subpages/Schedule";


axios.defaults.baseURL = 'https://react-asssingment-backend.onrender.com/';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<SignUp />} />
      <Route path='/home/*' element={
        <Home>
          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="calender" element={<Calender />} />
            <Route path="invoice" element={<Invoice />} />
            <Route path="notification" element={<Notification />} />
            <Route path="upload" element={<Upload />} />
            <Route path="setting" element={<Setting />} />
            <Route path="schedule" element={<Schedule />} />
          </Routes>
        </Home>
      } />
    </Routes>
  )
}