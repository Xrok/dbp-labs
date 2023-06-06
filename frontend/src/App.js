import Typography from '@mui/material/Typography';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Navigate,
} from 'react-router-dom';
import Home from './Home';
import Players from './Players';

const App = () => {
  return (
    <Router>
      <div>
        <Typography variant="h3" align="center" gutterBottom>
          TicTacToe
        </Typography>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/players">Players</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/players" element={<Players />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
