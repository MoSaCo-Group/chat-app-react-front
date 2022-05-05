import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './container.css'

const Landing = () => {
  return (
    <>
      <Container className='container-fluid'>
        <Row px-0>
          <Col className='leftCol' s={6} md={4} px={0}>
            <p className='landingWord'>MESSAGING MADE EASY</p>
            <a href='something' className='button1'>
                    Get Started
            </a>
            <a href='something' className='button1'>
                    Sign In
            </a>
          </Col>
          <Col className='rightCol' s={6} md={4} px={0}>
                BLANK SPACE
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Landing
