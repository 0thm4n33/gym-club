import './App.css';
import Layout from './pages/layout';
import NavBar from './components/navbar';
import AcceuilPage from './pages/acceuil';

function App() {
  return (
    <div className="App">
      <Layout navbar={<NavBar/>}>
          <AcceuilPage />
      </Layout>
    </div>
  );
}

export default App;
