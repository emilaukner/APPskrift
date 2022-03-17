import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

import { useCookies } from "react-cookie";

const WriteComment = () => {
    const { id } = useParams();
    const [cookie, setCookie] = useCookies(["user"])

    const [userComment,setUserComment] = useState();
    
    const publishComment = () =>{
        const comment = {
            comment: userComment,
            recipe: id,
            publishedBy: cookie.userId
        }
        axios.post("/comments/", comment).then((res)=> console.log("kommentar" + res.data)).catch((error)=> console.log("kommentar" +error))
        setOpen(false);
        window.location.reload(false);
    }

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {cookie.userId 
      ? <Button variant="outlined" onClick={handleClickOpen}> Legg til kommentar</Button>
      : (null)
      }  
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Legg til kommentar</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Skriv en kommentar for å dele dine meniger om oppskrifter.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="comment"
            label="Kommentar"
            type="kommentar"
            fullWidth
            multiline
            rows={4}
            value = {userComment}
            onChange = {(e) => setUserComment(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Avbryt</Button>
          <Button onClick={publishComment}>Legg ut</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default WriteComment;