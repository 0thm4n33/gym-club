import './App.css';
import Layout from './pages/layout';
import NavBar from './components/navbar';
import AcceuilPage from './pages/acceuil';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import AuthentificationPage from './pages/authentification';
import AdminPage from './pages/admin';

function App() {
  return (
    <div className="App">
      <Router>
        <Layout navbar={<NavBar/>}>
          <Routes>
            <Route path={'/'} element={<AcceuilPage />} />
            <Route path={'/membres'} element={<AuthentificationPage/>}/>
            <Route path={'/members/admin/'} element={<AdminPage/>} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
