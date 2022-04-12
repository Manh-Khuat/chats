import { Container } from '@mui/material'
import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Discipline.css'
function Discipline() {
  return (
    <Container>
        <div className='title'>
            <h3><span className='iconTitle'></span>THÔNG TIN KỶ LUẬT</h3>
        </div>
        <div className='bodyTitle'>
            <BasicTable />
        </div>
    </Container>
  )
}
const rows = [
    {
        id: '0',
        date: '01/01/2020',
        content: '...'
    },
    {
        id:'1',
        date: '01/01/2020',
        content: '...'
    }
]

function BasicTable() {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 300 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Ngày kỷ luật</TableCell>
              <TableCell align="left" >Nội dung kỷ luật</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                <input className='inputItemsDate' type="date" defaultValue={row.date}/>
                </TableCell>
                <TableCell align="left"><input className='inputTableCell' defaultValue={row.content}/></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}
  
export default Discipline