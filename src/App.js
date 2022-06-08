import './App.css';
import React from 'react';
import Layout from './pages/layout';
import NavBar from './components/navbar';
import AcceuilPage from './pages/acceuil';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import AuthentificationPage from './pages/authentification';
import AdminPage from './pages/admin';
import Service from './services';
import InscriptionPage from './pages/inscriptionAdherent';
import AddMatriel from './components/materiel/addMaterielForm';
import CoursPage from './pages/cours';
import PlanningPage from './pages/planning';
import AbonnementPage from './pages/abonnement';
import AdherentPage from './components/adherents/acceuill';
import AddMoniteur from './components/moniteur/AddMoniteur';
import AllMoitors from './components/moniteur/ListMoniteur';
export const ApplicationContext = React.createContext();
function App() {
  return (
    <div className="App">
        <ApplicationContext.Provider value={Service}>
            <Router>
            <Layout>
              <Routes>
                <Route path={'/'} element={<AcceuilPage />} />
                <Route path={'/members'} element={<AuthentificationPage/>}/>
                <Route path={'/members/admin/'} element={<AdminPage/>}/>
                <Route path={'/members/admin/moniteur-add'} element={<AddMoniteur/>}/>
                <Route path={'/members/admin/moniteur-all'} element={<AllMoitors />}/>
                <Route path={'/members/adherent/:id'} element={<AdherentPage/>}/>
                <Route path={'/members/admin/adherent/:id'} element={<AbonnementPage />}/>
                <Route path={'/inscription-adherent'} element={<InscriptionPage/>}/>
                <Route path={'/materiel/add'} element={<AddMatriel/>}/>
                <Route path={'/cours'} element={<CoursPage />}/>
                <Route path={'/planning'} element={<PlanningPage />}/>
              </Routes>
            </Layout>
          </Router>
        </ApplicationContext.Provider>
    </div>
  );
}

export default App;
