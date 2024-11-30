import "./Navigation.scss";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Form, Nav, Offcanvas } from "react-bootstrap";
import Logo from "../../assets/images/Home_Logo.svg";
import HomeDark from "../../assets/icons/navigation/bold/home.svg";
import HomeLight from "../../assets/icons/navigation/light/home.svg";
import TreeLight from "../../assets/icons/navigation/light/tree.svg";
import TreeDark from "../../assets/icons/navigation/bold/tree.svg";
import CalenderLight from "../../assets/icons/navigation/light/note-text.svg";
import CalenderDark from "../../assets/icons/navigation/bold/note-text.svg";
import ChatLight from "../../assets/icons/navigation/light/messages.svg";
import ChatDark from "../../assets/icons/navigation/bold/messages.svg";
import NotificationLight from "../../assets/icons/navigation/light/notification-bing.svg";
import NotificationDark from "../../assets/icons/navigation/bold/notification-bing.svg";
import ProfileImage from "../../assets/icons/navigation/Profile.png";
import CoinBackground from "../../assets/icons/navigation/coinParts/part1.svg";
import MainCoin from "../../assets/icons/navigation/coinParts/part2.svg";
import CenterCoin from "../../assets/icons/navigation/coinParts/part3.svg";

const menuItems = [
  {
    name: "Home",
    lightIcon: HomeLight,
    darkIcon: HomeDark,
    route: "/",
    alt: "Home Icon"
  },
  {
    name: "Tree",
    lightIcon: TreeLight,
    darkIcon: TreeDark,
    route: "/tree",
    alt: "Tree Icon"
  },
  {
    name: "Calendar",
    lightIcon: CalenderLight,
    darkIcon: CalenderDark,
    route: "/calendar",
    alt: "Calendar Icon",
  },
  {
    name: "Chat",
    lightIcon: ChatLight,
    darkIcon: ChatDark,
    route: "/chat",
    alt: "Chat Icon"
  },
  {
    name: "Notification",
    lightIcon: NotificationLight,
    darkIcon: NotificationDark,
    route: "/notifications",
    alt: "Notification Icon",
  },
  {
    name: "Profile",
    lightIcon: ProfileImage,
    darkIcon: ProfileImage,
    route: "/profile",
    alt: "Profile Icon",
  },
];

const Navigation = () => {
  return (
    <Navbar key="xl" expand="xl" className="mb-4 pt-5">
      <div className="navigation-container bg_secondary w-100 px-3 px-md-5">
        <Navbar.Brand className="me-xl-5 pe-xl-4" as={Link} to="/">
          <img
            src={Logo}
            
            className="d-inline-block align-top navigation-logo"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>

        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-xl`}
          aria-labelledby={`offcanvasNavbarLabel-expand-xl`}
          placement="end"
        >
          <Offcanvas.Header closeButton />
          <Offcanvas.Body className="align-items-center">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 navigation-search bg-transparent"
              aria-label="Search"
            />

            <Nav className="justify-content-end pe-xxl-5 ms-auto navigation-controls flex-wrap">
              {menuItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.route}
                  className="text-center nav-link"
                >
                  
                  <div className={`icon-container rounded-pill ${item.name === 'Profile' ? 'profile pb-1':'icon'}`}>
                    <img
                      src={item.lightIcon}
                      className="mx-auto inactive-icon rounded-pill"
                      alt={item.alt}
                    />
                    <img
                      src={item.darkIcon}
                      className="mx-auto active-icon rounded-pill"
                      alt={item.alt}
                    />
                  </div>
                  <span className="link-text">{item.name}</span>
                </NavLink>
              ))}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>

        <div className="coin-container ms-auto">
          <img src={CoinBackground} className="image-1 img-fluid" alt="" />
          <img src={MainCoin} className="image-2 img-fluid" alt="" />
          <img src={CenterCoin} className="image-3 img-fluid" alt="" />
          <span className="coin-text">
            10 <span className="pp-text">PP</span>
          </span>
        </div>
        <Navbar.Toggle
          className="ms-3"
          aria-controls={`offcanvasNavbar-expand-xl`}
        />
      </div>
    </Navbar>
  );
};

export default Navigation;
