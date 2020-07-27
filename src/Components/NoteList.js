import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import GetNote from "./GetNote";

const NoteList = (props) => {
  const nodeList = props.noteList;

  return (
    <>
      <br />
      <Container fluid>
        <Row>
          {nodeList.map((value, index) => {
            return (
              <Col md={3} xs={12} key={index}>
                <GetNote id={index} data={value} onSelect={props.deleteItem} />
                <br />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default NoteList;
