import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import AddIcon from "@material-ui/icons/Add";
const Note = (props) => {
  const [expand, setExpand] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote((preData) => {
      return {
        ...preData,
        [name]: value,
      };
    });
  };
  const expandIt = () => {
    setExpand(true);
  };
  const AddEvent = (e) => {
    e.preventDefault();
    if (note.title === "" || note.content === "") {
      alert("All Fields are required");
    } else {
      props.passNote(note);
      setNote({
        title: "",
        content: "",
      });
    }
  };
  return (
    <>
      <Container>
        <Row>
          <Col md={3}></Col>
          <Col md={6} xs={12}>
            <Card className="back-shadow">
              <Card.Body>
                <form>
                  <Card.Title>
                    {expand ? (
                      <input
                        type="text"
                        placeholder="Title"
                        className="form-control title-text"
                        autoComplete="off"
                        value={note.title}
                        name="title"
                        onChange={handleChange}
                      />
                    ) : null}
                  </Card.Title>
                  <Card.Text>
                    <textarea
                      type="text"
                      className="form-control"
                      rows=""
                      col=""
                      placeholder="Enter Text"
                      value={note.content}
                      name="content"
                      onChange={handleChange}
                      onClick={expandIt}
                    ></textarea>
                  </Card.Text>
                  {expand ? (
                    <AddIcon
                      className="plus_sign float-right"
                      onClick={AddEvent}
                    />
                  ) : null}
                </form>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
    </>
  );
};
export default Note;
