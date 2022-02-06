import { React, useState } from 'react';
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const TkLogin = () => {

  const navigate = useNavigate();
  const movePage = (path) => {
    navigate(`${path}/${name}`);
  }
  const [name, setName] = useState()

  return (
    <div>

      <Button
        onClick={() => movePage("*")}>戻る</Button><br />

      <h1>たくま用ログイン画面</h1>
      <Button
        onClick={() => movePage("/tkchat")}>ログイン</Button><br />

      <TextField label="name" color="secondary" focused onChange={e => setName(e.target.value)} />


    </div>
  );
};

export default TkLogin;
