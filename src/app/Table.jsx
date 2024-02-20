import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';

function createRow(name, websiteLink, youtubeLink) {
    return { name, websiteLink, youtubeLink };
}

const rows = [
    createRow('Renaissance Periodization', 'https://rpstrength.com/','https://www.youtube.com/@RenaissancePeriodization'),
    createRow('BioLayne', 'https://biolayne.com/','https://www.youtube.com/@biolayne1')
];

export default function ResourceTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 900 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Website</TableCell>
                        <TableCell align="right">Youtube</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.websiteLink}</TableCell>
                            <TableCell align="right">{row.youtubeLink}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}