import React from 'react'
import classes from './CardCarousel.module.css'
import { GameCard } from '../elements/GameCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const CardCarousel = () => {
  return (
    <>
     <Container fluid={true} className="p-0">
      <Row noGutters>
        <Col sm={4} ><GameCard/></Col>
        <Col sm={4}><GameCard/></Col>
        <Col sm={4} ><GameCard/></Col>
        <Col sm={4}><GameCard/></Col>
        <Col sm={4} ><GameCard/></Col>
        <Col sm={4}><GameCard/></Col>
        <Col sm={4} ><GameCard/></Col>
        <Col sm={4}><GameCard/></Col>
      </Row>
    </Container>
    </>
  )
}
