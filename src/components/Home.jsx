import { Col, Container, Row } from "react-bootstrap";
import Welcome from "./Welcome";
import AllTheBooks from "./AllTheBooks";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col className="text-center">
          <Welcome />
        </Col>
      </Row>
      <Row className="justify-content-between">
        <Col>
          <AllTheBooks />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
