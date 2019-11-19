import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

export default function AddAdForm(props) {
  return (
    <div className="adform">
      <h3>Add a new advertisement:</h3>
      <Form onSubmit={props.onSubmit}>
        <Row>
          <Form.Group>
            <Col>
              <Form.Control
                type="text"
                name="title"
                value={props.values.title}
                onChange={props.onChange}
                placeholder="Title"
              />
            </Col>
          </Form.Group>
          <Form.Group>
            <Col>
              <Form.Control
                type="text"
                name="description"
                value={props.values.description}
                onChange={props.onChange}
                placeholder="Description"
              />
            </Col>
          </Form.Group>
          <Form.Group>
            <Col>
              <Form.Control
                type="text"
                name="url"
                value={props.values.url}
                onChange={props.onChange}
                placeholder="URL"
              />
            </Col>
          </Form.Group>
          <Form.Group>
            <Col>
              <Form.Control
                type="text"
                name="price"
                value={props.values.price}
                onChange={props.onChange}
                placeholder="Price in €"
              />
            </Col>
          </Form.Group>
          <Form.Group>
            <Col>
              <Form.Control
                type="text"
                name="email"
                value={props.values.email}
                onChange={props.onChange}
                placeholder="E-mail"
              />
            </Col>
          </Form.Group>
          <Form.Group>
            <Col>
              <Form.Control
                type="text"
                name="phone"
                value={props.values.phone}
                onChange={props.onChange}
                placeholder="Phone number"
              />
            </Col>
          </Form.Group>
        </Row>
        <Button variant="outline-dark" type="submit" value="Submit" size="sm">
          Submit
        </Button>
      </Form>
    </div>
  );
}
