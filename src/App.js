import React, { useState } from 'react';
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
import words from './data';





function App() {
  const [wordsState, setWords]= useState(words);
  const wordsIndex = wordsState.findIndex(word => word.id === newWord.id)
if (wordsIndex){
    setWords( value: [...wordsState.slice(0, wordsIndex), newWord, ...wordsState.slice(wordsIndex +1)])   
  }
else {
    setWords(value: [...wordsState, newWord])
}
  return (
    <BrowserRouter>
    <div className={styles.App}>
    <AppHeader/>
    <main  className={styles.main}>
    <Routes>
              <Route path="/main" element={<AppMain/>}/>
              <Route path="/game" element={<CardSlider wordsState={wordsState} createData={createData}/>}/>
              <Route path="/words" element={<EditableTable wordsState={wordsState} createData={createData}/>}/>
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
