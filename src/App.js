import {
  FormControl,
  Input
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./App.css";
import { db } from "./firebase";
import Message from "./Message";
import firebase from "firebase"
import SendIcon from '@material-ui/icons/Send';
import Flipmove from "react-flip-move"
import { IconButton } from '@material-ui/core';

function App() {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState([]);
  const [username, setusername] = useState("");
  useEffect(() => {
    setusername(prompt("Please Enter Your Name"));
  }, []);

  useEffect(()=>{
      db.collection("messages")
      .orderBy("timestamp" , "desc")
      .onSnapshot(snapshot=>{
        setMessage(snapshot.docs.map(doc=>({id: doc.id , message: doc.data()})))
      })
  },[])

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput("");
  };

  return (
    <div className="App">
    <img className="logo_img" src="https://image.flaticon.com/icons/png/128/1617/1617469.png" alt="logo"/>
    <h2 className="welcome"> Welcome <span className="username_span">{username}</span></h2>
      <form className="app_form">
        <FormControl className="app_formcontrol">
          <Input className="app_input" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter Message And Press Enter"/>
 
          <IconButton 
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
            className="app_iconbutton">
                  <SendIcon/>
          </IconButton>
          </FormControl>
          <p className="footer_para"> Made With 💗 By Shovan</p>
      </form>
      <Flipmove>
      {message.map(({id , message}) => (
        <Message key={id} username={username} message={message} />
      ))}
      </Flipmove>
    </div>
  );
}

export default App;
