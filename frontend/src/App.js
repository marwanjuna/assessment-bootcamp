import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import styled from 'styled-components';

function App() {
  const App = styled.div`
  position: relative;
  min-height: 100vh;
  `;

  return (
    <App className="App">
      <Router>
        <Switch>
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          {/* <Route path="/" exact component={Home} /> */}
        </Switch>
      </Router>
    </App>
  );
}

export default App;
