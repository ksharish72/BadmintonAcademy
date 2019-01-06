import React from "react";
import TextField from "@material-ui/core/TextField";
import styles from "./ContactForm.css";
import { Row, Col } from "react-bootstrap";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {}
    };
  }

  render() {
    return (
      <div>
        <h3 id="H3_1">Contact Form</h3>
        <Row>
          <Col md={4}>
            <h6 style={{ margin: "30px" }}>Name</h6>
          </Col>
          <Col md={8}>
            <TextField
              required
              style={{ width: "500px" }}
              id="outlined-required"
              label="Required"
              margin="normal"
              variant="outlined"
            />
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h6 style={{ margin: "30px" }}>Email</h6>
          </Col>
          <Col md={8}>
            <TextField
              required
              style={{ width: "500px" }}
              id="outlined-required"
              label="Required"
              margin="normal"
              variant="outlined"
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default ContactForm;
