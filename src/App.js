import { Switch, Route } from 'react-router-dom';
import Home from './views/home';
import Search from './views/search';

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/buscar' component={Search}></Route>
    </Switch>
  );
}

export default App;
