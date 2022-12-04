
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import TextField from '@mui/material/TextField';
import CancelIcon from '@mui/icons-material/Cancel';



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



export default function EditableTable({words, editWords}) {

    const [isEditMode, setIsEditMode] = useState(false);
    const [rowIDToEdit, setRowIDToEdit] = useState(undefined);
    // const [rowsState, setRowsState] = useState(words);
    const [editedRow, setEditedRow] = useState();

    const handleEdit = (rowID) => {
        setIsEditMode(true);
        setEditedRow(undefined);
        setRowIDToEdit(rowID);
    }

    const handleRemoveRow = (rowID) => {
        const newData = words.filter(row => {
            return row.id !== rowID ? row : null
        });
        editWords(newData);
    }

    const handleOnChangeField = (e, rowID) => {
        const { name: StyledTableCell, value } = e.target;
        setEditedRow({
            id: rowID,
            [StyledTableCell]: value
        })
    }

    const handleCancelEditing = () => {
        setIsEditMode(false);
        setEditedRow(undefined);
    }

    const handleSaveRowChanges = () => {
        setTimeout(() => {
            setIsEditMode(false);
            const newData = words.map(row => {
                if (row.id === editedRow.id) {
                    if (editedRow.english) row.english = editedRow.english;
                    if (editedRow.transcription) row.transcription = editedRow.transcription;
                    if (editedRow.russian) row.russian = editedRow.russian;
                    if (editedRow.tags) row.tags = editedRow.tags;
                }
                return row;
            })
            editWords(newData);
            setEditedRow(undefined)
        }, 1000)
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>№</StyledTableCell>
                        <StyledTableCell align="center">English</StyledTableCell>
                        <StyledTableCell align="center">Transcription</StyledTableCell>
                        <StyledTableCell align="center">Russian translation</StyledTableCell>
                        <StyledTableCell align="center">Сategory</StyledTableCell>
                        <StyledTableCell align="center">Changes</StyledTableCell>
                        <StyledTableCell align="center">Delete</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {words.map((row) => (
                        <StyledTableRow key={row.id}>

                            <StyledTableCell component="th" scope="row">
                                {isEditMode && rowIDToEdit === row.id
                                    ? <TextField align="center"
                                        type='text'
                                        defaultValue={editedRow ? editedRow.number : row.number}
                                        id={row.id}
                                        name='number'
                                        onChange={(e) => handleOnChangeField(e, row.id)}
                                    /> : row.number
                                }
                            </StyledTableCell>

                            <StyledTableCell>
                                {isEditMode && rowIDToEdit === row.id
                                    ? <TextField align="center"
                                        type='text'
                                        defaultValue={editedRow ? editedRow.english : row.english}
                                        id={row.id}
                                        name='english'
                                        onChange={(e) => handleOnChangeField(e, row.id)}
                                    /> : row.english
                                }
                            </StyledTableCell>

                            <StyledTableCell>
                                {isEditMode && rowIDToEdit === row.id
                                    ?
                                    <TextField align="center" type='text'
                                        defaultValue={editedRow ? editedRow.transcription : row.transcription}
                                        id={row.id}
                                        name='transcription'
                                        onChange={(e) => handleOnChangeField(e, row.id)}
                                    /> : row.transcription
                                }
                            </StyledTableCell>

                            <StyledTableCell>
                                {isEditMode && rowIDToEdit === row.id
                                    ?
                                    <TextField align="center" type='text'
                                        defaultValue={editedRow ? editedRow.russian : row.russian}
                                        id={row.id}
                                        name='russian'
                                        onChange={(e) => handleOnChangeField(e, row.id)}
                                    /> : row.russian
                                }
                            </StyledTableCell>

                            <StyledTableCell>
                                {isEditMode && rowIDToEdit === row.id
                                    ?
                                    <TextField align="center" type='text'
                                        defaultValue={editedRow ? editedRow.tags : row.tags}
                                        id={row.id}
                                        name='russian'
                                        onChange={(e) => handleOnChangeField(e, row.id)}
                                    /> : row.tags
                                }
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                {isEditMode && rowIDToEdit === row.id
                                    ? <Fab onClick={() => handleSaveRowChanges()} disabled={!editedRow}><LibraryAddIcon /></Fab>
                                    : <Fab onClick={() => handleEdit(row.id)}><EditIcon /></Fab>}
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                {isEditMode && rowIDToEdit === row.id
                                    ? <Fab onClick={() => handleCancelEditing()}><CancelIcon /></Fab >
                                    : <Fab onClick={() => handleRemoveRow(row.id)}><DeleteIcon /></Fab >
                                }
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer >
    );
}