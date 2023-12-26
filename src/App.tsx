import './App.css';
import {Routes, Route} from 'react-router-dom';
import HomePage from './Containers/HomePage/HomePage';
import Header from './Components/Header/Header';
import NewFoodItem from './Containers/NewFoodItem/NewFoodItem';

const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/admin/">
          <Route path="catalog" element={(<HomePage/>)}/>
          <Route path="add-new-food" element={(<NewFoodItem/>)}/>
        </Route>
        <Route path="*" element={(
          <h1 className="not-found-alert">Not found</h1>
        )}/>
      </Routes>
    </>
  );
};

export default App;
