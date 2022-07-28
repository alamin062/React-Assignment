import React from "react";
import classes from "./footer.module.css";
//import { FacebookIcon, TwitterIcon, InstargramIcon } from '@mui/icons-material';
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={classes.footer_container}>
      <footer>
        <h1>Logo</h1>
        <p>© Copyright- All Rights Reserved</p>
        <div class={classes.social_area}>
          <ul>
            <li>
              <Link to="/facebook">
                <FacebookIcon />
              </Link>
            </li>
            <li>
              <Link to="/twitter">
                <TwitterIcon />
              </Link>
            </li>
            <li>
              <Link to="/instragram">
                <GitHubIcon />
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
