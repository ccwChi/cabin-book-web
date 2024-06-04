import { FaHome, FaUserFriends } from "react-icons/fa";
import { IoCalendarOutline, IoSettingsOutline } from "react-icons/io5";
import { MdCabin } from "react-icons/md";

const sidebarList = [
    { text: "Home", icon: FaHome, path: "/dashboard", active: false },
    {
      text: "Booking",
      icon: IoCalendarOutline,
      path: "/bookings",
      active: false,
    },
    { text: "Cabins", icon: MdCabin, path: "/cabins", active: false },
    { text: "Users", icon: FaUserFriends, path: "/users", active: false },
    {
      text: "Settings",
      icon: IoSettingsOutline,
      path: "/settings",
      active: false,
    },
  ];

  export {sidebarList}