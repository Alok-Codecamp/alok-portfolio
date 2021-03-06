import './App.css';
import Home from './Pages/HomePage/Home/Home';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import Blog from './Pages/Blog/Blog';
import About from './Pages/About/About';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Switch>
       <Route exact path="/">
       <Home></Home>
       </Route>
       <Route path="/home">
       <Home></Home>
       </Route>
       <Route path="/about">
       <About></About>
       </Route>
       <Route path="/blog">
       <Blog></Blog>
       </Route>
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
