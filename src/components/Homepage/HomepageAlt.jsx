import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { v4 as uuidv4 } from 'uuid';

// const url = 'http://45.80.181.87:8080/api/buku';
const url = process.env.REACT_APP_URL + '/api/buku';

export default function HomepageAlt({ buku }) {
  const handleClickResult = (id, jenis) => {
    if (jenis.toLowerCase() == 'buku') {
      window.open(`/detail-buku/${id}`, '_blank');
    } else {
      window.open(`/detail-laporan/${jenis}/${id}`, '_blank');
    }
  };

  return (
    <React.Fragment>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Judul</TableCell>
              <TableCell align="right">Penulis</TableCell>
              <TableCell align="right">Tahun</TableCell>
              <TableCell align="right">Bahasa</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {buku.length > 0
              ? buku.map(({ judul, tahun, penulis, bahasa, id, tipe }) => (
                  <TableRow
                    key={id}
                    onClick={() => handleClickResult(id, tipe)}
                    // key={}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {judul}
                    </TableCell>
                    <TableCell align="right">{penulis}</TableCell>
                    <TableCell align="right">{tahun}</TableCell>
                    <TableCell align="right">Indonesia</TableCell>
                  </TableRow>
                ))
              : null}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
}
