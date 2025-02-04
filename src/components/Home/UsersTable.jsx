import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, IconButton, Skeleton, TableFooter, TablePagination } from '@mui/material';
import React, { useEffect } from 'react';
import TablePaginationActions from './TablePaginationActions';
import { deleteUsers, getAllUsers } from '../../../api/users';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, getUsers } from '../../reduxSlices/usersSlice';
import MainModal from '../MainModal';
import CreateForm from '../_common/Forms/CreateForm';
import toast from 'react-hot-toast';


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


export default function UsersTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.users)
    useEffect(() => {
        const getUsersFromBackend = async () => {
            try {
                const data = await getAllUsers();
                dispatch(getUsers(data.users))
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        getUsersFromBackend();
    }, [dispatch]);
    
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleDelete = (userId) => {
        dispatch(deleteUser(userId))
        const deleteUserFromBackend = async () => {
            try {
                // eslint-disable-next-line no-unused-vars
                const resData = await deleteUsers(userId);
                toast.success("User is deleted successfully")
            } catch {
                // console.log(resData);
                toast.error("User deletion is failed!")
            }
        }
        deleteUserFromBackend();
    }
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="left">Fullname</StyledTableCell>
                        <StyledTableCell align="center">Birth Date</StyledTableCell>
                        <StyledTableCell align="center">Age</StyledTableCell>
                        <StyledTableCell align="center">Phone</StyledTableCell>
                        <StyledTableCell align="center">University</StyledTableCell>
                        <StyledTableCell align="center">Actions</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.length > 0 ? (rowsPerPage > 0
                        ? users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : users
                    ).map((user) => (
                        <StyledTableRow key={user.id}>
                            <StyledTableCell component="th" scope="user" align="left">
                                {user.firstName} {user.lastName}
                            </StyledTableCell>
                            <StyledTableCell align="center">{user.birthDate}</StyledTableCell>
                            <StyledTableCell align="center">{user.age}</StyledTableCell>
                            <StyledTableCell align="center">{user.phone}</StyledTableCell>
                            <StyledTableCell align="center">{user.university}</StyledTableCell>
                            <StyledTableCell align="center">

                                <MainModal header='Update user' button={({ handleOpen }) => (
                                    <IconButton onClick={handleOpen} sx={{ color: "var(--primary-color)" }}>
                                        <EditNoteOutlinedIcon />
                                    </IconButton>
                                )}>
                                    <CreateForm mode="update" userId={user.id} />
                                </MainModal>

                                <IconButton onClick={() => handleDelete(user.id)} sx={{ color: "red" }}>
                                    <DeleteOutlineOutlinedIcon />
                                </IconButton>
                            </StyledTableCell>
                        </StyledTableRow>
                    )) : <Box>
                        <Skeleton width={"100vw"} height={100}></Skeleton>
                        <Skeleton width={"100vw"} height={100}></Skeleton>
                        <Skeleton width={"100vw"} height={100}></Skeleton>
                        <Skeleton width={"100vw"} height={100}></Skeleton>
                        <Skeleton width={"100vw"} height={100}></Skeleton>
                    </Box>}

                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            sx={{ width: "100%" }}
                            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                            count={users.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            slotProps={{
                                select: {
                                    inputProps: {
                                        'aria-label': 'rows per page',
                                    },
                                    native: true,
                                },
                            }}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            ActionsComponent={TablePaginationActions}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    );
}
