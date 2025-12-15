
 import {
  Text,
  MapPin,
  Boxes,
  Ruler,
  PoundSterling,
  PlusSquare,
  Truck,
  ShoppingCart,
  Clock,
  Settings,
  RotateCcw,
  Menu as LucideMenu,
  FilePlus,
  Files,
  FormInputIcon
} from "lucide-react";

export const menu = [
  {
    label: "Online Booking Form",
    path: "#",
    icon: FormInputIcon, // Represents a multi-step form / content
    children: [
      {
        label: "Postcode",
        path: "/css-admin/online-booking-form/postcode",
        icon: MapPin, // Location-based input
      },
      {
        label: "Category",
        path: "/css-admin/online-booking-form/category",
        icon: Boxes, // Grouped items / categories
      },
      {
        label: "Size",
        path: "/css-admin/online-booking-form/size",
        icon: Ruler, // Measurement / dimensions
      },
      {
        label: "Rates",
        path: "/css-admin/online-booking-form/rates",
        icon: PoundSterling, // Pricing
      },
      {
        label: "Extra",
        path: "/css-admin/online-booking-form/extra",
        icon: PlusSquare, // Add-ons / extras
      },
      {
        label: "Roll On Roll Off",
        path: "/css-admin/online-booking-form/roll-&-roll",
        icon: Truck, // Vehicle / logistics
      },
      {
        label: "Orders",
        path: "/css-admin/online-booking-form/orders",
        icon: ShoppingCart, // Transactions / orders
      },
      {
        label: "Time Slots",
        path: "/css-admin/online-booking-form/timeslot",
        icon: Clock, // Scheduling
      },
      {
        label: "Default Rates",
        path: "/css-admin/online-booking-form/setting-rate",
        icon: Settings, // Configuration
      },
      {
        label: "Default Roll on Roll Off",
        path: "/css-admin/online-booking-form/setting-roll",
        icon: RotateCcw, // Reusable / default behavior
      },
    ],
  },

  {
    label: "Category",
    path: "/css-admin/category",
    icon: Boxes, // Global categories
  },

  {
    label: "All Pages",
    path: "#",
    icon: LucideMenu, // Navigation / pages container
    children: [
      {
        label: "Add New Page",
        path: "/css-admin/all-pages/add-new-page",
        icon: FilePlus, // Create new content
      },
      {
        label: "View All Pages",
        path: "/css-admin/all-pages",
        icon: Files, // Collection of pages
      },
    ],
  },
];


 


