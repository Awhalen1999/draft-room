import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Nav from './components/nav.jsx';
import Home from './pages/home.jsx';
import Login from './pages/login.jsx';
import Signup from './pages/signup.jsx';
import DraftSetup from './pages/draftSetup.jsx';
import DraftEdit from './pages/draftEdit.jsx';

const App = () => (
  <Router>
    <div className='app-container'>
      <Nav />
      <div className='content-container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/draft-setup' element={<DraftSetup />} />
          <Route path='/draft-edit' element={<DraftEdit />} />
        </Routes>
      </div>
    </div>
  </Router>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
