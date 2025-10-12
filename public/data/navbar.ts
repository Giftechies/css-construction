import  { v4 as uuidv4} from "uuid"



export const navbar =[
 
  {id: uuidv4(),
    menuTitle: "Skip Hire",
    path: "/skip-hire",
    menuItems: [
      {
        id: uuidv4(),
        title: "Skip Hire",
        menuItemPath: "/skip-hire/skip-hire",
      },
      {
        id: uuidv4(),
        title: "RORO Skip Hire",
        menuItemPath: "/skip-hire/roro-skip-hire",
      },
      {
        id: uuidv4(),
        title: "Builders Waste Clearance",
        menuItemPath: "/skip-hire/builders-waste-clearance",
      },
      {
        id: uuidv4(),
        title: "Waste Management",
        menuItemPath: "/skip-hire/waste-management",
      },
    ],
  },
  {
    id: uuidv4(),
    menuTitle: "Concrete Supply",
    path: "/concrete-supply",
    menuItems: [
      {
        id: uuidv4(),
        title: "Concrete Supply",
        menuItemPath: "/concrete-supply/concrete-supply",
      },
      {
        id: uuidv4(),
        title: "Screed",
        menuItemPath: "/concrete-supply/screed",
      },
      {
        id: uuidv4(),
        title: "Ready Mix Concrete",
        menuItemPath: "/concrete-supply/ready-mix-concrete",
      },
    ],
  },
  {
    id: uuidv4(),
    menuTitle: "Tipper & Grab Services",
    path: "/tipper-&-grab-services",
    menuItems: [
      {
        id: uuidv4(),
        title: "Grab Hire",
        menuItemPath: "/tipper-&-grab-services/grab-hire",
      },
      {
        id: uuidv4(),
        title: "Cage Lorrie’s",
        menuItemPath: "/tipper-&-grab-services/cage-lorries",
      },
      {
        id: uuidv4(),
        title: "Man and Van",
        menuItemPath: "/tipper-&-grab-services/man-and-van",
      },
      {
        id: uuidv4(),
        title: "Aggregates",
        menuItemPath: "/tipper-&-grab-services/aggregates",
      },
    ],
  },
];

export const navbar2 =[
      {
    id: uuidv4(),
    menuTitle: "About Us",
    path: "/#",
  },
  
  {
    id: uuidv4(),
    menuTitle: "Area We Serve",
    path: "/area-we-serve",
  },
  {
    id: uuidv4(),
    menuTitle: "Contact",
    path: "/#",
    menuItems:[
         {
        id: uuidv4(),
        title: "Skip Hire",
        menuItemPath: "/skip-hire",
      },
    ]
  },

]


export const mobilenav = [
  {id: uuidv4(),
    menuTitle: "Skip Hire",
    path: "#",
    menuItems: [
      {
        id: uuidv4(),
        title: "Skip Hire",
        menuItemPath: "/skip-hire",
      },
      {
        id: uuidv4(),
        title: "RORO Skip Hire",
        menuItemPath: "/roro-skip-hire",
      },
      {
        id: uuidv4(),
        title: "Builders Waste Clearance",
        menuItemPath: "/builders-waste-clearance",
      },
      {
        id: uuidv4(),
        title: "Waste Management",
        menuItemPath: "/waste-management",
      },
    ],
  },
  {
    id: uuidv4(),
    menuTitle: "Concrete Supply",
    path: "#",
    menuItems: [
      {
        id: uuidv4(),
        title: "Concrete Supply",
        menuItemPath: "/concrete-supply",
      },
      {
        id: uuidv4(),
        title: "Screed",
        menuItemPath: "/screed",
      },
      {
        id: uuidv4(),
        title: "Ready Mix Concrete",
        menuItemPath: "/ready-mix-concrete",
      },
    ],
  },
  {
    id: uuidv4(),
    menuTitle: "Tipper & Grab Services",
    path: "#",
    menuItems: [
      {
        id: uuidv4(),
        title: "Grab Hire",
        menuItemPath: "/grab-hire",
      },
      {
        id: uuidv4(),
        title: "Cage Lorrie’s",
        menuItemPath: "/cage-lorries",
      },
      {
        id: uuidv4(),
        title: "Man and Van",
        menuItemPath: "/man-and-van",
      },
      {
        id: uuidv4(),
        title: "Aggregates",
        menuItemPath: "/aggregates",
      },
    ],
  },
        {
    id: uuidv4(),
    menuTitle: "About Us",
    path: "/#",
  },
  
  {
    id: uuidv4(),
    menuTitle: "Area We Serve",
    path: "/area-we-serve",
  },
  {
    id: uuidv4(),
    menuTitle: "Contact",
    path: "/#"
  
  },
]