import React, { useEffect, useState } from 'react';
import { Row, Col, Card, CardBody, Container, CardTitle, Alert } from 'reactstrap';
import { Link } from 'react-router-dom';
import NavbarTop from '../components/navbar/NavbarTop';
import AuthBasicLayoutWidgets from '../components/widgets/AuthBasicLayoutWidgets';
import ForgetPassword from '../components/auth/basic/ForgetPassword';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import RunningProjects from '../components/dashboard-alt/RunningProjects';
import products from '../../src/data/dashboard/products';
import { method } from 'lodash';
import { InstaHashTag } from './InstaTools/InstaHashTag';
import { GenQRCode } from './QRCode/GenQRCode';
import { DailyPost } from './DailyPost/DailyPost';
import { Script } from './AgeCalculator/Script';
import { VideoCall } from './WebRTC/VideoCall';

export const Index = () => {
 

  // useEffect(()=>{
  //     console.log("API Testing Start");
  //     fetch('www.intagram.com/web/search/topsearch/?context=blended&query=%23money', {method: "GET"}).then((res)=>{
  //             res.json().then((result)=>{
  //                 console.log(result);
  //             })
  //         })
  // })

  

  return (
    <> 
    <Container>

    <NavbarTop />
    </Container>
    <VideoCall/>
    <Container>
      
      
      <InstaHashTag/>
      <Script/>
      <GenQRCode/>
      <DailyPost/>
    </Container>
    </>
  );
};
