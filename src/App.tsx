import './App.css';
import {Routes, Route} from 'react-router-dom';
import HomePage from './Containers/HomePage/HomePage';
import Header from './Components/Header/Header';
import NewFoodItem from './Containers/NewFoodItem/NewFoodItem';
import EditFoodItem from './Containers/EditFoodItem/EditFoodItem';
import Cart from './Components/Cart/Cart';

const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/admin/*">
          <Route path="" element={(<HomePage/>)}/>
          <Route path="add-new-food" element={(<NewFoodItem/>)}/>
          <Route path="edit/:id" element={(<EditFoodItem/>)}/>
        </Route>
        <Route path="*" element={(
          <h1 className="not-found-alert">Not found</h1>
        )}/>
        <Route path="/" element={(<HomePage/>)}/>
        <Route path="/cart" element={(<Cart/>)}/>
      </Routes>
    </>
  );
};

export default App;
