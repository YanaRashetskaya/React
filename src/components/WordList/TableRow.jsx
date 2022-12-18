
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import TextField from '@mui/material/TextField';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export default function TableRowComp(props) {
    const { word, createOrUpdate, deleteWord } = props

    // смена состояний строк таблицы (режим чтения-по умолчанию либо режим редактирования)
    const [editMode, setEditMode] = useState(false);
    const [changingWord, setChangingWord] = useState(word)

    // функция запуска режима редактирования полей, запускается при нажатии кнопки
    const handleEditButton = () => {
        setEditMode(true);
    }
    // возвращаемся в режим чтения по кнопке save, а также запускаем функцию записи изменения инпутов
    const handleSaveButton = () => {
        setEditMode(false);
        createOrUpdate(changingWord);
    }
    //временное состояния изменения слова
    function changeWord(lang, value) {
        const tmpWord = { ...changingWord }
        tmpWord[lang] = value
        setChangingWord(tmpWord);
    }
    return (
        <StyledTableRow>
            {editMode ?
                <>
                    <StyledTableCell component="th" scope="row"><TextField id="outlined-read-only-input" defaultValue={word.id} /> </StyledTableCell>

                    <StyledTableCell><TextField id="outlined-read-only-input"
                        defaultValue={word.english}
                        onChange={(event) => changeWord("english", event.target.value)} />
                    </StyledTableCell>

                    <StyledTableCell><TextField id="outlined-read-only-input" defaultValue={word.transcription} />
                    </StyledTableCell>

                    <StyledTableCell>
                        <TextField id="outlined-read-only-input"
                            defaultValue={word.russian}
                            onChange={(event) => changeWord("russian", event.target.value)} />
                    </StyledTableCell>

                    <StyledTableCell align="center">
                        <Fab onClick={handleSaveButton}><LibraryAddIcon /></Fab>
                    </StyledTableCell>
                    <StyledTableCell align="center"><Fab onClick={() => deleteWord(word.id)}><DeleteIcon /></Fab>
                    </StyledTableCell>


                </>
                :
                <>
                    <StyledTableCell>{word.id}</StyledTableCell>
                    <StyledTableCell>{word.english}</StyledTableCell>
                    <StyledTableCell>{word.transcription}</StyledTableCell>
                    <StyledTableCell>{word.russian}</StyledTableCell>
                    <StyledTableCell align="center">
                        <Fab onClick={handleEditButton}><EditIcon /></Fab >
                    </StyledTableCell>
                    <StyledTableCell align="center">
                        <Fab onClick={() => deleteWord(word.id)}><DeleteIcon /></Fab >
                    </StyledTableCell>
                </>
            }
        </StyledTableRow>
    )
}