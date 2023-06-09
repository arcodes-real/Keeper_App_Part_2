import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

// function createNote(entry){
//   return (
//     <Note
//     key = {entry.id}
//     title = {entry.title}
//     content = {entry.content}
//      />

function App() {
  return (
    <div>
      <Header />

      {notes.map((entry) => (
        <Note key={entry.id} title={entry.title} content={entry.content} />
      ))}

      <Footer />
    </div>
  );
}

export default App;
