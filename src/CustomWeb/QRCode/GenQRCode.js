import React, { useEffect, useState } from 'react';
import { Row, Col, Card, CardBody, Container, CardTitle, Alert } from 'reactstrap';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import QRCode from 'react-qr-code';

export const GenQRCode = () => {
  const [URL, setURL] = useState();
  const [genURL, setGenURL] = useState();
  const handleSubmit = () => {
    setGenURL(URL);
    console.log('Handle Submit Cliced');
  };
  return (
    <div>
      <Card className="my-5">
        {/* <CardTitle className="text-center text-lg-center p-3"><h3>Insta HashTag</h3></CardTitle> */}
        <CardBody className="overflow-hidden ">
          <Row className="align-items-center justify-content-between">
            <Col lg={1} className=" m-1">
              {/* <img src="https://picsum.photos/250/350" className="" alt="" /> */}
            </Col>
            <Col lg={4}>
              <CardTitle className="text-center text-lg-center p-2">Genrage QR Code</CardTitle>
              <Form className="mt-4">
                <FormGroup>
                  <Input
                    className="form-control"
                    placeholder="Enter URL"
                    value={URL}
                    onChange={({ target }) => setURL(target.value)}
                    type="text"
                  />
                </FormGroup>
                <FormGroup>
                  <Button onClick={handleSubmit} color="primary" block disabled={!URL}>
                    Generate QR Code
                  </Button>
                </FormGroup>
              </Form>
            </Col>
            <Col lg={4} className=" m-1 ">
              {genURL ? (
                
                <QRCode className="m-2" size={320} value={genURL} />
              ) : (
                <img src="https://picsum.photos/320" className="m-2" alt="" />
              )}
              {/* <FormGroup>
                  {genURL ? <Button color="primary" block >
                    Download QR Code
                  </Button>: null}
                </FormGroup> */}
            </Col>
            <Col lg={1} className=" m-1">
              {/* <img src="https://picsum.photos/250/350" className="" alt="" /> */}
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};
