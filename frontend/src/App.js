import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RecipeDetails from './RecipeDetails';
import NotFound from './NotFound';
import BrfSlider from './BrfSlider';
import { BrfData } from './BrfData';


function App() {

  return (

    <Router>
      <div className="App">
        <Navbar />

        <div className="content">
          <BrfSlider slides={BrfData} />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/create" element={<Create />}></Route>
            <Route path="/recipes/:id" element={<RecipeDetails />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </div>
    </Router >

  );
}

export default App;
