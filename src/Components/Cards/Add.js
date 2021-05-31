import React, { useState } from "react";
import Modal from "react-modal";
import ReactStars from "react-rating-stars-component";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

function Add({ submitMovies }) {
  

  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  function setModalIsOpenToTrue() {
    setModalIsOpen(true);
  }
  function setModalIsOpenToFalse() {
    setModalIsOpen(false);
  }
  const [addMovie, setAddMovie] = useState({
    title: "",
    description: "",
    rating: 0,
    poster: "",
  });
  const changemovie = (e) => {
    setAddMovie({
      ...addMovie,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <button onClick={setModalIsOpenToTrue}>Add your movie</button>
      <Modal isOpen={modalIsOpen} style={customStyles}>
        <label>Title</label>
        <br />
        <input
          type="text"
          name="title"
          placeholder="title"
          value={addMovie.title}
          onChange={changemovie}
        />
        <br />
        <label>URl</label>
        <br />
        <input
          type="text"
          name="poster"
          placeholder="poster Url"
          defaultValue={addMovie.poster}
          onChange={changemovie}
        />
        <br />
        <label>Description</label>
        <br />
        <textarea
          name="description"
          placeholder="description"
          defaultValue={addMovie.description}
          onChange={changemovie}
        />
        <br />
        <label>Rating</label>
        <br />
        <ReactStars
          count={5}
          onChange={(rate)=>
            setAddMovie({...addMovie,rating:rate})
        }
          size={24}
          activeColor="#ffd700"
        />
    
        <button
          onClick={() => {
            submitMovies(addMovie);
            setAddMovie({ title: "", description: "", rating: "", poster: "" });
            {
              setModalIsOpenToFalse();
            }
          }}
        >
          Add
        </button>
      </Modal>
    </div>
  );
}

export default Add;
