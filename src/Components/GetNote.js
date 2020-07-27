import React from "react";
import { Card } from "react-bootstrap";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
const GetNote = (props) => {
  return (
    <>
      <Card className="note-list-card">
        <Card.Footer className="title-note">{props.data.title}</Card.Footer>
        <Card.Body className="content-note"> {props.data.content}</Card.Body>
        <Card.Body>
          <hr />
          <DeleteRoundedIcon
            className="delete-icon float-right"
            onClick={() => {
              props.onSelect(props.id);
            }}
          />
        </Card.Body>
      </Card>
    </>
  );
};
export default GetNote;
