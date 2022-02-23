import { React, useState } from 'react';
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import SkateboardingIcon from '@mui/icons-material/Skateboarding';
import MicIcon from '@mui/icons-material/Mic';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


import './TkLogin.css'


const TkLogin = () => {

  const navigate = useNavigate();
  const movePage = (path) => {
    navigate(`${path}/${name}`);
  }
  const [name, setName] = useState()

  const theme = createTheme();

  return (

    <div className="Tkloginmain">


      <Button onClick={() => movePage("*")}
        variant="outlined" color="error">
        戻る
        </Button>






      {/* <div className="TkLogin-wrapper">

     
        <Button variant="contained" color="success"
          onClick={() => movePage("/tkchat")}>
          ログイン <LoginIcon /></Button><br />

        <Button onClick={() => movePage("*")}
          variant="outlined" color="error">
          戻る
        </Button><br />

        <TextField className="Tklogin-Text" label="name" color="secondary" focused onChange={e => setName(e.target.value)} />

      </div> */}

      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>

              <AudiotrackIcon />

            </Avatar>
            <Typography component="h1" variant="h5">
              Sing in
          </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Name"
                name="email"
                autoComplete="email"
                autoFocus

                focused onChange={e => setName(e.target.value)}

              />



              <Button type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={() => movePage("/tkchat")}>
                sign in <LoginIcon /></Button>



            </Box>
          </Box>

        </Container>
      </ThemeProvider>








    </div >
  );
};

export default TkLogin;

