import './App.css';
import { Button, Grid, Stack, TextField, createTheme } from '@mui/material';

import { ThemeProvider } from '@mui/material';
import { useState } from 'react';
import Board from './Board';
const theme = createTheme();
function Home() {
  const [homePlayer, setHomePlayer] = useState(undefined);
  const [awayPlayer, setAwayPlayer] = useState(undefined);

  const handleSubmitLogin = async (event) => {
    event.preventDefault();
    const firstname = event.target.firstname.value;
    const password = event.target.password.value;
    try {
      const response = await fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        body: JSON.stringify({ firstname, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (!response.ok) {
        return undefined;
      }
      console.log(response);
      return response.json();
    } catch (error) {
      return undefined;
    }
  };

  const handleHomePlayerLogin = async (event) => {
    const player = await handleSubmitLogin(event);
    setHomePlayer(player);
  };

  const handleAwayPlayerLogin = async (event) => {
    const player = await handleSubmitLogin(event);
    setAwayPlayer(player);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        <Grid item xs={12} sm={4} p={2}>
          {homePlayer ? (
            <Stack>
              <p>id: {homePlayer.id}</p>
              <p>firstname: {homePlayer.firstname}</p>
              <p>lastname: {homePlayer.lastname}</p>
            </Stack>
          ) : (
            <Stack
              component="form"
              onSubmit={handleHomePlayerLogin}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField id="firstname" label="firstname" name="firstname" />
              <TextField
                id="password"
                name="password"
                label="Password"
                type="password"
              />

              <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
                Login
              </Button>
            </Stack>
          )}
        </Grid>
        <Grid item xs={12} sm={4} p={2}>
          <Board />
        </Grid>

        <Grid item xs={12} sm={4} p={2}>
          {awayPlayer ? (
            <Stack>
              <p>id: {awayPlayer.id}</p>
              <p>firstname: {awayPlayer.firstname}</p>
              <p>lastname: {awayPlayer.lastname}</p>
            </Stack>
          ) : (
            <Stack
              component="form"
              onSubmit={handleAwayPlayerLogin}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField id="firstname" label="firstname" name="firstname" />
              <TextField
                id="password"
                name="password"
                label="Password"
                type="password"
              />

              <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
                Login
              </Button>
            </Stack>
          )}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Home;
