import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Note from "./Components/Note";
import NoteList from "./Components/NoteList";

const App = () => {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    // alert("Clicked");
    setAddItem((prevData) => {
      return [note, ...prevData];
    });
    console.log(note);
  };
  const handleDelete = (id) => {
    // alert(id + "deleted");
    setAddItem((oldData) => {
      return oldData.filter((currData, newId) => {
        return newId !== id;
      });
    });
  };
  return (
    <>
      <Navbar />
      <Note passNote={addNote} />
      {/* passign note List to NoteList Component */}
      <NoteList noteList={addItem} deleteItem={handleDelete} />
      <Footer />
    </>
  );
};

export default App;
