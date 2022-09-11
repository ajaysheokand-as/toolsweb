import React, { useEffect, useState } from 'react';
import { Row, Col, Card, CardBody, Container, CardTitle, Alert } from 'reactstrap';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import RunningProjects from '../../components/dashboard-alt/RunningProjects';
import products from '../../data/dashboard/products';


export const InstaHashTag = () => {
    const [keyword, setKeyword] = useState('Money');
    const handleSubmit = () => {
        // fetch('https://www.instagram.com/web/search/topsearch/?context=blended&query=%23money',{}).then((res=>{
        //         res.json().then((res)=>{
        //             console.log(res);
        //         })
        //     }))
        try {
          const response = fetch('https://www.instagram.com/web/search/topsearch/?context=blended&query=%23money', {
            method: 'GET',
            withCredentials: true,
            headers: { 'Content-Type': 'application/json' ,
            "Access-Control-Allow-Origin":"*"}
          });
          console.log( response.json());
        } catch (error) {
          return [];
        }
      };
  return (
    <div>
        <Card className="mt-5">
        {/* <CardTitle className="text-center text-lg-center p-3"><h3>Insta HashTag</h3></CardTitle> */}
        <CardBody className="overflow-hidden ">
          <Row className="align-items-center justify-content-between">
            <Col lg={4}>
              <CardTitle className="text-center text-lg-center p-2">Search #Tag</CardTitle>
              <Form className="mt-4">
                <FormGroup>
                  <Input
                    className="form-control"
                    placeholder="Keyword"
                    value={keyword}
                    onChange={({ target }) => setKeyword(target.value)}
                    type="text"
                  />
                </FormGroup>
                <FormGroup>
                  <Button onClick={handleSubmit} color="primary" block disabled={!keyword}>
                    Search
                  </Button>
                </FormGroup>
              </Form>
            </Col>
            <Col lg={7} className="pl-lg-4 m-1">
              <img src="https://picsum.photos/600/250" width={'100%'} className="img-fluid" alt="" />
            </Col>
          </Row>
        </CardBody>
      </Card>
      <Card className="my-4">
        <RunningProjects projects={products} />
      </Card>
    </div>
  )
}
