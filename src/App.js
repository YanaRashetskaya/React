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




/*export async function loader({ request }) {
  const response = await fetch("http://itgirlschool.justmakeit.ru/api/words/", {
      signal: request.signal,
  });
  const initialWords = await response.json();
  return {initialWords};
}
*/

function App() {
  //const {initialWords} = useLoaderData();
  const [words, setWords] = useState(initialWords);

  console.log(words);

  function createOrUpdateWord(newWord) {
    const wordIndex = words.findIndex(word => word.id === newWord.id)
    let newWords;
    if (wordIndex !== -1) {
        newWords = [...words.slice(0, wordIndex), newWord, ...words.slice(wordIndex + 1)]
    } else {
        newWords = [newWord, ...words]
    }
    setWords(newWords)
}

const deleteWord = (wordID) => {
  setWords(words.filter(word => word.id !== wordID));
}


  return (
    <BrowserRouter>
    <AppHeader/>
    <main  className={styles.main}>
    <Routes>
              <Route path="/main" element={<AppMain words={words} 
                            createOrUpdate={createOrUpdateWord} 
                            deleteWord={deleteWord}/>}/>
              <Route path="/game" element={<CardSlider words={words} />}/>
              <Route path="/words" element={<EditableTable words={words} 
                            createOrUpdate={createOrUpdateWord} 
                            deleteWord={deleteWord} />}/>
              <Route exact path="/"element={<AppMain words={words} 
                            createOrUpdate={createOrUpdateWord} 
                            deleteWord={deleteWord}/>}/>
              <Route path="*" element={<NotFound/>}/>
    </Routes>
    </main> 
    <footer className={styles.footer}><AppFooter/></footer>
    </BrowserRouter>
  );
}

export default App;
