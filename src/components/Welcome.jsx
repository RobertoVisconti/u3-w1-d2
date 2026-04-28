import { Alert, AlertHeading, Container } from "react-bootstrap";

const Welcome = () => {
  return (
    <Container>
      <div>
        <h1 className="fw-bold text-white">Welcome to Whispering Pages! </h1>
        <p className="fw-bold text-white">Your favorite library!</p>
      </div>
      <Alert variant="info">
        <AlertHeading className="dw-bold">To get the discount</AlertHeading>
        <p className="dw-bold">bring 3 phoenix feathers</p>
      </Alert>
    </Container>
  );
};

export default Welcome;
