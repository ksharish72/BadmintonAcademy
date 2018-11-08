import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

const styles = theme => ({
  root: {
    maxWidth: 1125,
    marginTop: 65,
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
        <AppBar style={{ backgroundColor: "black" }} position="static">
          <Tabs value={value} onChange={this.handleChange} fullWidth>
            <Tab
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
        {value === 0 && <TabContainer>Item One</TabContainer>}
        {value === 1 && <TabContainer>Item Two</TabContainer>}
        {value === 2 && <TabContainer>Item Three</TabContainer>}
      </div>
    );
  }
}

export default withStyles(styles)(SimpleTabs);
