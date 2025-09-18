import { v4 as uuidv4 } from "uuid";
export const navbarData = [
  {
    id: uuidv4(),
    menuTitle: "Home",
    path: "#",
    menuItems: [
      {
        id: uuidv4(),
        title: "Home One",
        menuItemPath: "/",
      },
      {
        id: uuidv4(),
        title: "Home Two",
        menuItemPath: "/home-two",
      },
      {
        id: uuidv4(),
        title: "Home Three",
        menuItemPath: "/home-three",
      },
    ],
  },
  {
    id: uuidv4(),
    menuTitle: "About",
    path: "/about-us",
  },
  {
    id: uuidv4(),
    menuTitle: "Pages",
    path: "#",
    menuItems: [
      {
        id: uuidv4(),
        title: "Careers",
        menuItemPath: "/careers",
      },
      {
        id: uuidv4(),
        title: "Careers Details",
        menuItemPath: "/careers-details",
      },
      {
        id: uuidv4(),
        title: "Feature",
        menuItemPath: "/feature",
      },
      {
        id: uuidv4(),
        title: "Feature Details",
        menuItemPath: "/feature-details",
      },
      {
        id: uuidv4(),
        title: "How It Work",
        menuItemPath: "/how-it-work",
      },
      {
        id: uuidv4(),
        title: "Our Team",
        menuItemPath: "/our-team",
      },
      {
        id: uuidv4(),
        title: "Team Details",
        menuItemPath: "/team-details",
      },
      {
        id: uuidv4(),
        title: "Pricing Plan",
        menuItemPath: "/pricing-plan",
      },
      {
        id: uuidv4(),
        title: "Services",
        menuItemPath: "/services",
      },
      {
        id: uuidv4(),
        title: "Service Details",
        menuItemPath: "/service-details",
      },
      {
        id: uuidv4(),
        title: "Privacy Policy",
        menuItemPath: "/privacy-policy",
      },
      {
        id: uuidv4(),
        title: "Terms Condition",
        menuItemPath: "/terms-conditions",
      },
    ],
  },
  {
    id: uuidv4(),
    menuTitle: "Loan",
    path: "#",
    menuItems: [
      {
        id: uuidv4(),
        title: "Loan",
        menuItemPath: "/loan",
      },
      {
        id: uuidv4(),
        title: "Business Loan",
        menuItemPath: "/business-loan",
      },
      {
        id: uuidv4(),
        title: "Car Loan",
        menuItemPath: "/car-loan",
      },
      {
        id: uuidv4(),
        title: "Education Loan",
        menuItemPath: "/education-loan",
      },
      {
        id: uuidv4(),
        title: "Home Loan",
        menuItemPath: "/home-loan",
      },
      {
        id: uuidv4(),
        title: "Personal Loan",
        menuItemPath: "/personal-loan",
      },
    ],
  },
  {
    id: uuidv4(),
    menuTitle: "Blog",
    path: "/blogs",
  },
  {
    id: uuidv4(),
    menuTitle: "Contact",
    path: "/contact",
  },
];
