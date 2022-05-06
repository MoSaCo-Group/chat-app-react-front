import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap'
import './container.css'
import { withRouter } from 'react-router-dom'
import mainLogo from '../../Images/mainLogo.png'

class Landing extends Component {
  render () {
    // const { history } = this.props

    return (
      <>
        <Container className='container-fluid'>
          <Row className='homePage' px-0>
            <img src={mainLogo} />
          </Row>
        </Container>
      </>
    )
  }
}

export default withRouter(Landing)
