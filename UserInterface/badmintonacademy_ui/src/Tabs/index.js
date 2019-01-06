import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import ImageSlider from "./Home/ImageSlider/Slider";
import Content from "./Home/HomeContent/Content";
import Contact from "./Contact/Contact.js";
import AboutUs from "./AboutUs/index";
import Services from "./Services & Facilities/index";
import BookNow from "./Book Now/index";

function TabContainer(props) {
  return <Typography component="div">{props.children}</Typography>;
}

const styles = theme => ({
  root: {
    maxWidth: 1125,
    marginLeft: "auto",
    marginBottom: 0,
    marginRight: "auto",
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
});

class SimpleTabs extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar
          style={{
            backgroundColor: "black",
            borderBottom: "3px solid rgb(204, 0, 0)"
          }}
          position="static"
        >
          <Tabs
            scrollable
            scrollButtons="auto"
            value={value}
            onChange={this.handleChange}
          >
            <Tab
              fullWidth
              label={
                <span style={{ fontFamily: "Oswald", fontSize: "medium" }}>
                  Home
                </span>
              }
            />
            <Tab
              label={
                <span style={{ fontFamily: "Oswald", fontSize: "medium" }}>
                  About
                </span>
              }
            />
            <Tab
              label={
                <span style={{ fontFamily: "Oswald", fontSize: "medium" }}>
                  History
                </span>
              }
            />
            <Tab
              label={
                <span style={{ fontFamily: "Oswald", fontSize: "medium" }}>
                  Service
                </span>
              }
            />
            <Tab
              label={
                <span style={{ fontFamily: "Oswald", fontSize: "medium" }}>
                  Gallery
                </span>
              }
            />
            <Tab
              label={
                <span style={{ fontFamily: "Oswald", fontSize: "medium" }}>
                  BookNow
                </span>
              }
            />
            <Tab
              label={
                <span style={{ fontFamily: "Oswald", fontSize: "medium" }}>
                  Schedule
                </span>
              }
            />
            <Tab
              label={
                <span style={{ fontFamily: "Oswald", fontSize: "medium" }}>
                  Contact
                </span>
              }
            />
          </Tabs>
        </AppBar>
        {value === 0 && (
          <TabContainer>
            <ImageSlider />
            <Content />
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            <AboutUs />
          </TabContainer>
        )}
        {value === 2 && <TabContainer>Item Three</TabContainer>}
        {value === 3 && (
          <TabContainer>
            <Services />
          </TabContainer>
        )}
        {value === 5 && (
          <TabContainer>
            <BookNow />
          </TabContainer>
        )}
        {value === 7 && (
          <TabContainer>
            <Contact />
          </TabContainer>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(SimpleTabs);
