import React, {useState} from 'react';
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
import initialWords from './data'





function App() {
    const [words, setWords] = useState(initialWords);
    // function createOrUpdate(word) {
    //     // новое или изменение
    //     fetch(url, {method: "POST", body: word}).then(response => response.json()).then(data => {
    //         setWords([...words, data]) // Логика вставки зависит от нового или старого, см. предыдущую встречу
    //     })
    // }
  return (
    <BrowserRouter>
        <AppHeader/>
        {/*<div className={styles.App}>*/}
        {/*  <nav className={styles.nav}>*/}

        {/*  </nav>*/}
        <main  className={styles.main}>
        <Routes>
              <Route path="/main" element={<AppMain words={words} editWords={setWords}/>}/>
              <Route path="/game" element={<CardSlider/>}/>
              <Route path="/words" element={<EditableTable words={words} editWords={setWords}/>} />
              <Route exact path="/" element={<AppMain words={words} editWords={setWords} />} />
              <Route path="*" element={<NotFound/>} />
        </Routes>
        </main>
        <footer className={styles.footer}>
            <AppFooter/>
        </footer>
        {/*</div>*/}
    </BrowserRouter>
  );
}

export default App;
