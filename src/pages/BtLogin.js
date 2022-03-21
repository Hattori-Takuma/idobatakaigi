import { React, useState } from 'react';
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './BtLogin.css'

const BtLogin = () => {

  const navigate = useNavigate();
  const movePage = (path) => {
    navigate(`${path}/${name}`);
  }
  const [name, setName] = useState()

  return (
    <div>
    <div className="BtLogin-wrapper">

    <h1 className="login" >ログインしてみる？</h1>

    <Button onClick={() => movePage("/btchat")}>
      やってみます
    </Button><br />

    <Button onClick={() => movePage("*")}variant="outlined" color="error">
      今は大丈夫です
    </Button><br />

    <TextField className="Tklogin-Text" label="name" color="secondary" focused onChange={e => setName(e.target.value)} />

    </div>
</div>
  );
};

export default BtLogin;