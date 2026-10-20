import '../Components/CSS/DashboardLayout.css'
import { NavLink ,useNavigate } from 'react-router-dom'

import { RiLogoutCircleRFill } from "react-icons/ri";
import { MdDashboardCustomize } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { MdRestaurantMenu } from "react-icons/md";
import { IoIosTime } from "react-icons/io";
import { GiMoneyStack } from "react-icons/gi";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { RiSpeakFill } from "react-icons/ri";
import { IoTrashBin } from "react-icons/io5";
import { AiFillFileText } from "react-icons/ai";
import { IoSettings } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { useEffect, useState } from 'react';
const DashboardLayout = ({ children }) => {

  const [role, setRole] = useState("")
  
  useEffect(() => {
    setRole(localStorage.getItem("role") ?? "Guest")
  }, [])

  const navigate = useNavigate()

  const handleLogout = () => {
    navigate("/login")
  }

 const tabs = {
  superAdmin: [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: MdDashboardCustomize
    },
    {
      title: "Students",
      path: "/students",
      icon: PiStudentFill
    },
    {
      title: "Menu",
      path: "/menu",
      icon: MdRestaurantMenu
    },
    {
      title: "Attendance",
      path: "/attendence",
      icon: IoIosTime
    },
    {
      title: "Mess Fee",
      path: "/messFee",
      icon: RiMoneyRupeeCircleFill
    },
    {
      title: "Complaints",
      path: "/complaints",
      icon: RiSpeakFill
    },
    {
      title: "Notice",
      path: "/notice",
      icon: AiFillFileText
    },
    {
      title: "Profile",
      path: "/Profile",
      icon: FaUserCircle
    }
  ],

  Admin: [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: MdDashboardCustomize
    },
    {
      title: "Students",
      path: "/students",
      icon: PiStudentFill
    },
    {
      title: "Menu",
      path: "/menu",
      icon: MdRestaurantMenu
    },
    {
      title: "Attendance",
      path: "/attendence",
      icon: IoIosTime
    },
    {
      title: "Mess Fee",
      path: "/messFee",
      icon: RiMoneyRupeeCircleFill
    },
    {
      title: "Complaints",
      path: "/complaints",
      icon: RiSpeakFill
    },
    {
      title: "Notice",
      path: "/notice",
      icon: AiFillFileText
    },
    {
      title: "Profile",
      path: "/Profile",
      icon: FaUserCircle
    }
  ]
}

  const roleTabs = tabs[role] || []
  return (
<>
    <div className="dashboard-layout">
      <div className="dashboard-sidebar">
        <div className="dashboard-logo">
          <img src="/Images/mess-logo.png" alt="Mess Logo" />
        </div>

        <div className="sidebar-menu">
          {
            roleTabs.map((tab)=>{
              const Icon = tab.icon;
              return (
                <NavLink
                  key={tab.path}
                to={tab.path}
                className = {({isActive})=> `navlinks ${isActive ? "active" : ""}`}>
                  <Icon/>
                    <span>{tab.title}</span>
              
                </NavLink>

              )
            })
          }

        </div>

        <div className="sidebar-bottom">

          <button className="logout-btn" onClick={handleLogout}>
            <RiLogoutCircleRFill size={20} />
            Logout
          </button>
        </div>
      </div>
      <div className="dashboardLayout-main">
        <div className="dashboardLayout-header">
          <div className="header-left">

            <h2>Welcome Back! {role} </h2>
            <p>Manage your hostel mess easily</p>

          </div>

          <div className="header-right">
            <div className="header-profile">
              <FaUserCircle size={40} />
              <div className="profile-info">
                <h4>Admin</h4>
                <p>Palak Singh</p>
              </div>
            </div>

          </div>

        </div>

        <div className="dashboardLayout-content">
          {children}
        </div>

      </div>

    </div>
    </>
  )
}


export default DashboardLayout