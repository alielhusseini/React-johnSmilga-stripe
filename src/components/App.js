import Navbar from './Navbar';
import Hero from './Hero';
import Sidebar from './Sidebar';
import Submenu from './Submenu';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Hero />
      <Sidebar />
      <Submenu />
      <Switch>
        <Route exact path="/"/>
      </Switch>
    </Router>
  );
}
 
export default App;