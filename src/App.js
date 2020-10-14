import React from 'react';
import {Container,Row,Col} from 'reactstrap';
import Register from './component/register/register.component';
import Footer from './component/Shared/footer/footer.component';
import Header from './component/Shared/Header/header.component';


function App() {
  return (
   <Container>
     <Row>
       <Col >
          <Header/>
       </Col>
     </Row>

     <Row >
       <Col md={4} >
       <Register/>    
       </Col>
     
     </Row>


     <Row>
       <Col>
        <Footer/>
       </Col>
     </Row>

   </Container>
  );
}

export default App;