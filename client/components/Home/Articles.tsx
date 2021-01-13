import { FC } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const Articles: FC = () => {
  const truncate = (str: string, len: number): string => {
    if (str.length > len) {
      if (len <= 3) {
        return str.slice(0, len - 3) + "...";
      } else {
        return str.slice(0, len) + "...";
      }
    } else {
      return str;
    }
  };

  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <Card bg="dark" text="light">
            <Card.Header className="text-warning card-title">Card Title</Card.Header>
            <Card.Body>{truncate("This is a test description", 200)}</Card.Body>
            <Card.Footer>Card Footer</Card.Footer>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card bg="dark" text="light">
            <Card.Header className="text-warning card-title">Card Title</Card.Header>
            <Card.Body>Card description</Card.Body>
            <Card.Footer>Card Footer</Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Articles;
