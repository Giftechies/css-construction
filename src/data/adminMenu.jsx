  export const menu = [
    {
      label: "Online Booking Form",
      path: "#",
      children: [
        { label: "Postcode", path: "/admin/online-booking-form/postcode" },
        { label: "Category", path: "/admin/online-booking-form/category" },
        { label: "Size", path: "/admin/online-booking-form/size" },
        { label: "Rates", path: "/admin/online-booking-form/rates" },
      ],
    },
    {
      label:"Skip Hire",
      path:"#",
      children:[
        {label:" Sub Skip Hire",path:"/admin/skip-hire/sub-skip-hire"},
        {label:"Index Content Page",path:"/admin/skip-hire"},
        
      ]
    },

        {
      label:"Concrete Supply",
      path:"#",
      children:[
        {label:"Sub Concrete Supply",path:"/admin/concrete-supply/sub-concrete-supply"},
        // {label:" Waste Managment",path:"/admin/waste-managment"},
      ]
    },
      {
      label:"Tipper & Grab Services",
      path:"#",
      children:[
        {label:"Grab Hire",path:"/admin/grab-hire"},
        {label:"Cage Lorrie’s",path:"/admin/cage-lorrie’s"},
        {label:"Man and Van",path:"/admin/man-and-van"},
        {label:"Aggregates",path:"/admin/aggregates"},
        // {label:" Waste Managment",path:"/admin/waste-managment"},
      ] 
    }

  ]


