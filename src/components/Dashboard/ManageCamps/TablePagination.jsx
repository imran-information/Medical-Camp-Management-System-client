import React, { useState } from 'react';
import { TablePagination as MuiTablePagination } from '@mui/material';

const CustomTablePagination = ({ allCamps }) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => setPage(newPage);
    const handleChangeRowsPerPage = (event) => setRowsPerPage(+event.target.value);

    return (
        <div>
            <MuiTablePagination
                component="div"
                count={allCamps?.length}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </div>
    );
};

export default CustomTablePagination;