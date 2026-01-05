import logo from './logo_new.svg'
import arrow_icon from './arrow_icon.svg'
import arrow_icon_dark from './arrow_icon_dark.svg'
import group_profile from './group_profile_new.png'
import bgImage1 from './bgImage1.png'
import bgImage2 from './bgImage2.png'
import hero_img from './hero_img.png'
import microsoft_logo from './microsoft_logo.png'
import zoom_logo from './zoom_logo.png'
import rakuten_logo from './rakuten_logo.png'
import coinbase_logo from './coinbase_logo.png'
import ads_icon from './ads_icon.svg'
import content_icon from './content_icon.svg'
import marketing_icon from './marketing_icon.svg'
import social_icon from './social_icon.svg'
import menu_icon from './menu_icon.svg'
import close_icon from './close_icon.svg'
import work_pos_system from './Retail-POS-System-Dashboard.png'
import work_pharmacy_app from './Pharmacy-POS-System.png'
import work_resturant_system from './Restaurant-POS Billing-Payment-Screen.png'
import email_icon from './email_icon.svg'
import person_icon from './person_icon.svg'
import facebook_icon from './facebook_icon.svg'
import twitter_icon from './twitter_icon.svg'
import instagram_icon from './instagram_icon.svg'
import linkedin_icon from './linkedin_icon.svg'
import logo_dark from './logo_dark_new.svg'
import airbnb_logo from './airbnb_logo.svg'
import google_logo from './google_logo.svg'
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
export const company_logos = [
  microsoft_logo,
  zoom_logo,
  rakuten_logo,
  coinbase_logo,
  airbnb_logo,
  google_logo,
]

const assets = {
  logo,
  arrow_icon,
  arrow_icon_dark,
  group_profile,
  bgImage1,
  bgImage2,
  hero_img,
  ads_icon,
  content_icon,
  marketing_icon,
  social_icon,
  menu_icon,
  close_icon,
  work_pos_system,
  work_pharmacy_app,
  work_resturant_system,
  email_icon,
  person_icon,
  facebook_icon,
  twitter_icon,
  instagram_icon,
  linkedin_icon,
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

export const teamData = [
  { name: 'Haley Carter', title: 'CEO & founder', image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200' },
  { name: 'James Walker', title: 'Ads manager', image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200' },
  { name: 'Jessica Morgan', title: 'Vice president', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop' },
  { name: 'Ashley Bennett', title: 'Marketing & sales', image: 'https://randomuser.me/api/portraits/women/10.jpg' },
  { name: 'Emily Parker', title: 'Content marketer', image: 'https://randomuser.me/api/portraits/women/11.jpg' },
  { name: 'Ryan Mitchell', title: 'Content writer', image: 'https://randomuser.me/api/portraits/men/9.jpg' },
  { name: 'Megan Brooks', title: 'Performance manager', image: 'https://randomuser.me/api/portraits/women/12.jpg' },
  { name: 'Amber Foster', title: 'Senior writer', image: 'https://randomuser.me/api/portraits/women/14.jpg' },
]