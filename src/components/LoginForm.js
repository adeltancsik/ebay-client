import React from "react";
import "./styling/LoginForm.css";
import { Form, Button, Row, Col } from "react-bootstrap";

export default function LoginForm(props) {
  return (
    <div className="loginform">
      <h3>Please log in:</h3>
      <Form onSubmit={props.onSubmit}>
        <Row>
          <Form.Group controlId="formBasicEmail">
            <Col>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={props.values.email}
                onChange={props.onChange}
              />
            </Col>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Col>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={props.values.password}
                onChange={props.onChange}
              />
            </Col>
          </Form.Group>
          <Button variant="outline-dark" type="submit" value="Submit">
            Submit
          </Button>
        </Row>
      </Form>
    </div>
  );
}
