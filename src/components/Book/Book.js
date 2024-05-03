import React, { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Book.css";

const Book = (props) => {
  const history = useNavigate();
  const { _id, name, author, description, price, image } = props.book;

  // State for confirmation dialog
  const [openDialog, setOpenDialog] = useState(false);
  const [bookVisible, setBookVisible] = useState(true); // New state for book visibility

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/books/${_id}`);
      // Close the confirmation dialog
      handleCloseDialog();
      // Hide the book card
      setBookVisible(false);
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    bookVisible && (
      <div className="card">
        <img src={image} alt={name} />
        <article>By {author}</article>
        <h3>{name}</h3>
        <p>{description}</p>
        <h3>Rs {price}</h3>
        <Button LinkComponent={Link} to={`/books/${_id}`} sx={{ mt: "auto" }}>
          Update
        </Button>
        <Button color="error" onClick={handleOpenDialog} sx={{ mt: "auto" }}>
          Delete
        </Button>

        {/* Confirmation dialog */}
        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>Confirm Deletion</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to delete the book "{name}"?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">
              Cancel
            </Button>
            <Button onClick={handleDelete} color="error">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  );
};

export default Book;
