import {
    Container,
    Row,
    Col,
    Button
  } from 'react-bootstrap'
  
  function Page() {
    return <Container>
      <Row>
        <Col>
          <h1>Next.js React Bootstrap</h1>
          <Button variant="primary" size="lg">
            A nice Button
          </Button>
        </Col>
      </Row>
    </Container>
  }
   
  export default Page