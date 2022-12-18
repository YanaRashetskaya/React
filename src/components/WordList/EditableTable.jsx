
import { styled } from '@mui/material/styles';
import {
    Paper, Box, Table, TableContainer, Container,
    TableBody, TableCell, TableRow, TableHead,
    TableFooter, TablePagination, TextField
} from "@mui/material";
import { tableCellClasses } from '@mui/material/TableCell';
import React, { useState } from 'react';
import TableRowComp from './TableRow';






const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));



const EditableTable = ({ words, createOrUpdate, deleteWord, TablePaginationActions }) => {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const [value, setValue] = useState('');
    const [searchParam] = useState(["russian", "english"]);

    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - words.length) : 0;

    const handleChangePage = (_event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 5));
        setPage(0);
    };

    function search(words) {
        return words.filter((word) => {
            return searchParam.some((newWord) => {
                return (
                    word[newWord]
                        .toString()
                        .toLowerCase()
                        .indexOf(value.toLowerCase()) > -1
                );
            });
        });
    }


    return (
        <Container>
            <Box m={5}>
                <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">
                    <TextField id="filled-search" label="Search for..." type="search"
                        value={value} onChange={(event) => setValue(event.target.value)} />
                </Box>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>№</StyledTableCell>
                                <StyledTableCell align="center">English</StyledTableCell>
                                <StyledTableCell align="center">Transcription</StyledTableCell>
                                <StyledTableCell align="center">Russian translation</StyledTableCell>
                                <StyledTableCell align="center">Changes</StyledTableCell>
                                <StyledTableCell align="center">Delete</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {(rowsPerPage > 0
                                ? search(words).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                : search(words)).map(editWord =>
                                    <TableRowComp
                                        word={editWord} key={editWord.id} createOrUpdate={createOrUpdate} deleteWord={deleteWord}
                                    />
                                )}
                            {emptyRows > 0 && (
                                <TableRow style={{ height: 53 * emptyRows }}>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TablePagination
                                    rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                    colSpan={5}
                                    count={words.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    SelectProps={{
                                        inputProps: {
                                            'aria-label': 'rows per page',
                                        },
                                        native: true,
                                    }}
                                    onPageChange={handleChangePage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                    showFirstButton={true}
                                    showLastButton={true}
                                    ActionsComponent={TablePaginationActions}
                                />
                            </TableRow>
                        </TableFooter>
                    </Table>
                </TableContainer>
            </Box>
        </Container>
    );
}

export default EditableTable;
