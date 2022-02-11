import { React, useState } from 'react';
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './TkLogin.css'
const TkLogin = () => {

  const navigate = useNavigate();
  const movePage = (path) => {
    navigate(`${path}/${name}`);
  }
  const [name, setName] = useState()

  return (
    <div>



      <div className="TkLogin-wrapper">

        <h1 className="takuma" >本当にログイン画面するんですか？</h1>
        <Button
          onClick={() => movePage("/tkchat")}>もちろんログインします！</Button><br />

        <Button onClick={() => movePage("*")}
          variant="outlined" color="error">
          やっぱりログインしない
      </Button><br />

        <TextField className="Tklogin-Text" label="name" color="secondary" focused onChange={e => setName(e.target.value)} />

      </div>

    </div>
  );
};

export default TkLogin;

