import React, {  useState } from 'react';
import { Row, Col, Card, CardBody, Container, CardTitle, Alert, CardFooter, CardText } from 'reactstrap';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import QRCode from 'react-qr-code';

export const DailyPost = () => {
    const [name, setname] = useState();
    const [genname, setGenname] = useState();
    const handleSubmit = () => {
      setGenname(name);
      console.log('Handle Submit Cliced');
    };
  return (
    <div>
        <Card className="my-5">
        {/* <CardTitle className="text-center text-lg-center p-3"><h3>Insta HashTag</h3></CardTitle> */}
        <CardBody className="overflow-hidden ">
          <Row className="align-items-center justify-content-between">
          <Col lg={6} className=" m-1 ">
            <CardText></CardText>
                {/* <img src="https://picsum.photos/500" className="m-2" alt="" /> */}
                
              {/* <FormGroup>
                  {genname ? <Button color="primary" block >
                    Download QR Code
                  </Button>: null}
                </FormGroup> */}
            </Col>
            <Col lg={4}>
              <CardTitle className="text-center text-lg-center p-2">Enter Your Name</CardTitle>
              <Form className="mt-4">
                <FormGroup>
                  <Input
                    className="form-control"
                    placeholder="Enter name"
                    value={name}
                    onChange={({ target }) => setname(target.value)}
                    type="text"
                  />
                </FormGroup>
                <FormGroup>
                  <Button onClick={handleSubmit} color="primary" block disabled={!name}>
                    Submit
                  </Button>
                </FormGroup>
              </Form>
            </Col>
            
            <Col lg={1} className=" m-1">
              {/* <img src="https://picsum.photos/250/350" className="" alt="" /> */}
            </Col>
          </Row>
        </CardBody>
      </Card>
      
    </div>
  )
}
