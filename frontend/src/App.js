import './App.css';
import { Button, Grid, Stack, TextField } from '@mui/material';
import { useState } from 'react';

function App() {
  const [homePlayer, setHomePlayer] = useState(undefined);
  const [awayPlayer, setAwayPlayer] = useState(undefined);

  const handleSubmitLogin = async (event) => {
    event.preventDefault();
    const firstname = event.target.firstname.value;
    const password = event.target.password.value;
    try {
      const response = await fetch('http://127.0.0.1:5001/login', {
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
    <Grid container>
      <Grid xs={4} p={2}>
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
      <Grid xs={4} p={2}>
        <Stack>
          {Array.from({ length: 3 }, (x, i) => i).map((element) => {
            <Grid container>
              {Array.from({ length: 3 }, (x, i) => i).map((element) => {
                <Grid>p</Grid>;
              })}
            </Grid>;
          })}
        </Stack>
        {/* tablero */}
      </Grid>
      <Grid xs={4} p={2}>
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
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
