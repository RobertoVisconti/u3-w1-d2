import { Card, Button, Row, Col } from "react-bootstrap";
import fantasyBooks from "../data/fantasy.json";

const AllTheBooks = () => {
  return (
    <Row className="g-3">
      {fantasyBooks.map((book) => {
        return (
          <Col xs={12} sm={6} md={4} lg={3} key={book.asin} className="mb-3">
            <Card className="h-100 shadow-sm border-0">
              {" "}
              <Card.Img
                variant="top"
                src={book.img}
                style={{ height: "500px", objectFit: "cover" }}
              />
              <Card.Body className="d-flex flex-column bg-secondary">
                {" "}
                <Card.Title className="text-truncate" title={book.title}>
                  {book.title}
                </Card.Title>
                <Card.Text>
                  {book.category} - {book.price}€
                </Card.Text>
                <Button variant="primary" className="mt-auto">
                  Acquista
                </Button>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default AllTheBooks;
