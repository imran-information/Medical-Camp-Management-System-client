import { TablePagination } from '@mui/material';

const [page, setPage] = useState(0);
const [rowsPerPage, setRowsPerPage] = useState(5);

const handleChangePage = (event, newPage) => setPage(newPage);
const handleChangeRowsPerPage = (event) => setRowsPerPage(+event.target.value);

// Pagination controls:
<TablePagination
    component="div"
    count={camps.length}
    page={page}
    onPageChange={handleChangePage}
    rowsPerPage={rowsPerPage}
    onRowsPerPageChange={handleChangeRowsPerPage}
/>
