import React, { useState } from "react";
import { Link } from "gatsby";
import { serviceLinks } from "../../constants/service-links";
import { eventLinks } from "../../constants/event-links";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Home } from "@mui/icons-material";
import "../../styles/desktop/navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <div className="nav-container">
      <div className="nav-links">
        <Menu sx={{ fontSize: 50 }} onClick={handleClick} />
        <SwipeableDrawer
          disableBackdropTransition={!iOS}
          disableDiscovery={iOS}
          anchor="right"
          open={click}
          onClose={() => handleClick}
        >
          <List sx={{ width: 300 }}>
            <ListItem key="Home" sx={{ width: 300 }}>
              <ListItemText
                primary={
                  <Link className="link" to="/">
                    <Home sx={{ fontSize: 50, left: 0 }} />
                  </Link>
                }
              />
              <ListItemText
                primary={
                  <CloseIcon
                    sx={{ fontSize: 50, marginLeft: 22 }}
                    onClick={handleClick}
                  />
                }
              />
            </ListItem>
            <Divider
              sx={{ fontFamily: "Courier New", fontWeight: 600, fontSize: 20 }}
              textAlign="left"
            >
              Services
            </Divider>
            {serviceLinks.map((link) => (
              <ListItem key={link.value}>
                <ListItemText
                  primary={
                    <Link className="link" to={link.path}>
                      {link.value}
                    </Link>
                  }
                />
              </ListItem>
            ))}
            <Divider
              sx={{ fontFamily: "Courier New", fontWeight: 600, fontSize: 20 }}
              textAlign="left"
            >
              Events
            </Divider>
            {eventLinks.map((link) => (
              <ListItem key={link.value}>
                <ListItemText
                  primary={
                    <Link className="link" to={link.path}>
                      {link.value}
                    </Link>
                  }
                />
              </ListItem>
            ))}
            <Divider
              sx={{ fontFamily: "Courier New", fontWeight: 600, fontSize: 20 }}
              textAlign="left"
            >
              Contact
            </Divider>
            <ListItem key="Form">
              <ListItemText
                primary={
                  <Link className="link" to="/contact-form">
                    Request a Quote
                  </Link>
                }
              />
            </ListItem>
            <ListItem key="Email">
              <ListItemText
                primary={
                  <Link className="link" to="/">
                    Email Me
                  </Link>
                }
              />
            </ListItem>
          </List>
        </SwipeableDrawer>
      </div>
    </div>
  );
};

export default Navbar;
