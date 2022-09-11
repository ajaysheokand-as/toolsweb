import React, { useEffect, useState } from 'react';
import { Row, Col, Card, CardBody, Container, CardTitle, Alert } from 'reactstrap';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import QRCode from 'react-qr-code';

export const VideoCall = () => {
  const [URL, setURL] = useState();
  const [genURL, setGenURL] = useState();
  const handleSubmit = () => {
    setGenURL(URL);
    console.log('Handle Submit Cliced');
  };
  return (
    <div>
      <Card className="m-2">
        {/* <CardTitle className="text-center text-lg-center p-3"><h3>Insta HashTag</h3></CardTitle> */}
        <CardBody className="overflow-hidden ">
          <Row className="align-items-center justify-content-between">
            <Col lg={4}>
                <div className="m-2">
                <img src="https://picsum.photos/340"  alt="" />
                </div>
                <div className="m-2">
                <img src="https://picsum.photos/340"  alt="" />
                </div>
           
            </Col>
            <Col lg={4} className=" m-1 ">
              {genURL ? (
                
                <QRCode className="m-2" size={320} value={genURL} />
              ) : (
                <img src="https://picsum.photos/320" className="m-2" alt="" />
              )}
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
