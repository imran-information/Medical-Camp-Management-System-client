import React, { useState } from 'react';
import { TablePagination as MuiTablePagination } from '@mui/material';

const Pagination = ({ campCount, page, setPage, rowsPerPage, setRowsPerPage }) => {
    const handleChangePage = (event, newPage) => setPage(newPage);
    const handleChangeRowsPerPage = (event) => setRowsPerPage(+event.target.value);

    return (
        <div >
            <MuiTablePagination className='dark:text-gray-300'
                component="div"
                count={campCount}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </div>
    );
};

export default Pagination;