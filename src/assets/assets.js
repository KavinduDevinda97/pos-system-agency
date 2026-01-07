import logo from './logo_new.svg'
import arrow_icon from './arrow_icon.svg'
import arrow_icon_dark from './arrow_icon_dark.svg'
import group_profile from './group_profile_new.png'
import bgImage1 from './bgImage1.png'
import bgImage2 from './bgImage2.png'
import hero_img from './hero_img.png'
import menu_icon from './menu_icon.svg'
import close_icon from './close_icon.svg'
import work_pos_system from './Retail-POS-System-Dashboard.png'
import work_pharmacy_app from './Pharmacy-POS-System.png'
import work_resturant_system from './Restaurant-POS Billing-Payment-Screen.png'
import logo_dark from './logo_dark_new.svg'
import menu_icon_dark from './menu_icon_dark.svg'
import sun_icon from './sun_icon.svg'
import moon_icon from './moon_icon.svg'

import {
  Monitor,
  Boxes,
  Receipt,
  BarChart3,

} from "lucide-react";

export const posServices = [
  {

    title: "POS Software Development",
    description:
      "Custom-built POS solutions tailored to your business workflow for fast billing.",
    icon: Monitor,
  },
  {
 
    title: "Inventory Management",
    description:
      "Track stock levels in real time with smart alerts to prevent shortages and losses.",
    icon: Boxes,
  },
  {

    title: "Billing & Invoicing",
    description:
      "Generate accurate bills with  discounts, and multiple payment methods.",
    icon: Receipt,
  },
  {

    title: "Reports & Analytics",
    description:
      "Visual sales reports to help you analyze performance and grow your business.",
    icon: BarChart3,
  },

];


const assets = {
  logo,
  arrow_icon,
  arrow_icon_dark,
  group_profile,
  bgImage1,
  bgImage2,
  hero_img,
  menu_icon,
  close_icon,
  work_pos_system,
  work_pharmacy_app,
  work_resturant_system,
  logo_dark,
  menu_icon_dark,
  sun_icon,
  moon_icon
}
export const posWorks = [
  {
    id: 1,
    title: "Retail POS System Dashboard",
    description:
      "A modern retail POS dashboard with real-time sales tracking, inventory management, and performance analytics.",
    image: work_pos_system,
  },

  {
    id: 2,
    title: "Restaurant POS Billing & Payment System",
    description:
      "Efficient restaurant POS system featuring order management, quick billing, and multiple payment options.",
    image: work_resturant_system,
  },
    {
    id: 3,
    title: "Pharmacy POS System",
    description:
      "Comprehensive pharmacy POS solution with medicine inventory control, expiry tracking, and fast billing.",
    image: work_pharmacy_app,
  },    
]
export default assets

