import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import styles from './App.css';
import AppHeader from '../src/components/Header/AppHeader';
import AppFooter from '../src/components/Footer/AppFooter';
import AppMain from '../src/components/MainPage/AppMain';
import CardSlider from './components/CardSlider/CardSlider';
import NotFound from './components/NotFound/NotFound';
import EditableTable from './components/WordList/EditableTable';





function App() {
  return (
    <BrowserRouter>
    <div className={styles.App}>
      <nav className={styles.nav}>
    <AppHeader/>
    </nav>
    <main  className={styles.main}>
    <Routes>
              <Route path="/main" element={<AppMain/>}/>
              <Route path="/game" element={<CardSlider/>}/>
              <Route path="/words" element={<EditableTable/>}/>
              <Route exact path="/"element={<AppMain />}/>
              <Route path="*" element={<NotFound/>}/>
    </Routes>
    </main> 
    <footer className={styles.footer}><AppFooter/></footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
