import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import './container.css'
import { withRouter } from 'react-router-dom'

class Landing extends Component {
  render () {
    const { history } = this.props

    return (
      <>
        <Container className='container-fluid'>
          <Row id='homePage' px-0>
            <Col className='leftCol' s={6} md={4} px={0}>
              <p className='landingWord'>MESSAGING MADE EASY</p>
              {/* <a href='/sign-up' onClick="hideMain()" className='button1'>
                      Get Started
            </a> */}
              <Button onClick={() => history.push('/sign-up')} className='button1' type='click'>Get Started
              </Button>
              {/* <a href='/sign-in' onClick="hideMain()" className='button1'>
                      Sign In
            </a> */}
            </Col>
            <Col className='rightCol' s={6} md={4} px={0}>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default withRouter(Landing)
