import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import LinkIcon from '@mui/icons-material/Link';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../Redux/actions';

import data from '../data.json'

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


export default function CustomizedTables() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  console.log(user)

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Job Title</StyledTableCell>
            <StyledTableCell align="right">Data Published</StyledTableCell>
            <StyledTableCell align="right">URL</StyledTableCell>
            <StyledTableCell align="right">Like</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.results.map((item) => (
            <StyledTableRow key={item.id}>
              <StyledTableCell component="th" scope="row">
                {item.title}
              </StyledTableCell>
              <StyledTableCell align="right">{item.publishedDate}</StyledTableCell>
              <StyledTableCell align="right"><a href={item.url} target='_blank' rel="noreferrer"><LinkIcon /></a></StyledTableCell>
              <StyledTableCell align="right"><FavoriteBorderIcon /></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}