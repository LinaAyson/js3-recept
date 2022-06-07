import Navbar from './Navbar';
import Home from './Home';
import CreateRecipe from './Components/CreateRecipe';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ViewRecipe from './Components/ViewRecipe';
import RecipeList from './Components/RecipeList';
import NotFound from './NotFound';
import Footer from './Footer';
import EditRecipe from './Components/EditRecipe'

function App() {
  return (
    <Router>
      <div className="App" >
        <Navbar />
        <div className="content" >
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/create" element={<CreateRecipe />}></Route>
            <Route path="/edit/:id" element={<EditRecipe />}></Route>
            <Route path="/recipes/" element={<RecipeList />}></Route>
            <Route path="/recipes/:id" element={<ViewRecipe />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router >
  );
}
export default App;