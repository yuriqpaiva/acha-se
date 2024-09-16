import React, { useState } from 'react';
import {
  TableContainer,
  StyledTable,
  TableHeader,
  TableRow,
  TableCell,
  PaginationWrapper,
  PaginationButton,
} from './styles';

const Table = ({ columns, rows, itemsPerPage = 10, ActionBar }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(rows.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const paginatedRows = rows.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <TableContainer>
      <StyledTable>
        <thead>
          <TableRow>
            {columns.map((column, index) => (
              <TableHeader key={index}>{column.label}</TableHeader>
            ))}
            {ActionBar && <TableHeader></TableHeader>}{' '}
          </TableRow>
        </thead>
        <tbody>
          {paginatedRows.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns.map((column, colIndex) => (
                <TableCell key={colIndex}>
                  {column.value === 'imageUrl' ? (
                    <img
                      src={row[column.value]}
                      alt={row.name}
                      style={{
                        width: '50px',
                        height: '50px',
                        objectFit: 'cover',
                      }}
                    />
                  ) : (
                    row[column.value]
                  )}
                </TableCell>
              ))}
              {ActionBar && (
                <TableCell>
                  <ActionBar row={row} />
                </TableCell>
              )}
            </TableRow>
          ))}
        </tbody>
      </StyledTable>

      {totalPages > 1 && (
        <PaginationWrapper>
          {Array.from({ length: totalPages }, (_, index) => (
            <PaginationButton
              key={index}
              active={index + 1 === currentPage}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </PaginationButton>
          ))}
        </PaginationWrapper>
      )}
    </TableContainer>
  );
};

export default Table;
