import React from 'react';
import styles from './App.css';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import AppMain from './components/AppMain';
import Flashcard from './components/Flashcard';


function App() {
  return (
    <div className={styles.App}>
    <AppHeader></AppHeader>
    <AppMain><Flashcard/></AppMain>
    <AppFooter></AppFooter>
    </div>
  );
}

export default App;
