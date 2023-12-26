import './App.css';
import {Routes, Route} from 'react-router-dom';
import HomePage from './Containers/HomePage/HomePage';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/admin/">
          <Route path="catalog" element={(<HomePage/>)}/>
        </Route>
        <Route path="*" element={(
          <h1 className="not-found-alert">Not found</h1>
        )}/>
      </Routes>
    </>
  );
};

export default App;
