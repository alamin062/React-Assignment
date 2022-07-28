import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import classes from "./home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header />
      <div className={classes.banner_container}>
        <div className={classes.banner_content}>
          <div>
            <h1>consectetur adipiscing elit. Sed eu pharetra.</h1>
          </div>
          <div>
            <p>
              consectetur adipiscing elit. Sed eu pharetra ante. Nullam tempus
              eget ex sit amet congue.
            </p>
          </div>
          <div className={classes.btn_container}>
            {" "}
            <Link to="/contact">Contact us</Link>
          </div>
        </div>
      </div>
      <div className={classes.about_content}>
        <h2>ABOUT US</h2>
        <div>
          <p>
            {" "}
            consectetur adipiscing elit. Sed eu pharetra ante. Nullam tempus
            eget <br />
            ex sit amet congue.
          </p>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
            pharetra ante. Nullam tempus eget ex sit amet congue. Nullam a
            laoreet leo. Duis ultricies pulvinar lacus, dictum aliquam tellus
            consequat eget. Cras convallis accumsan lacus in ultricies. Aliquam
            accumsan ut tellus id vulputate. Curabitur suscipit lacus justo, vel
            auctor leo accumsan ut. Nunc pretium tincidunt justo sit amet
            iaculis. Vestibulum id interdum nisi, non semper ligula. Maecenas eu
            nibh non dui viverra gravida id quis velit..
          </p>
        </div>
        <div className={classes.btn_container}>
          {" "}
          <Link to="/read-more" className="link">
            READ MORE
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
