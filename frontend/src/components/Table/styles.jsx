import styled from 'styled-components';

export const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  margin-top: 20px;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 6px;

  color: ${({ theme }) => theme.colors.text};
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 6px;
  overflow: hidden;
`;

export const TableHeader = styled.th`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.primary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  text-align: left;
  font-weight: bold;
  &:first-child {
    border-top: none;
  }
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.zinc[100]};
  }
  &:nth-child(odd) {
    background-color: ${({ theme }) => theme.colors.zinc[50]};
  }
`;

export const TableCell = styled.td`
  padding: 10px 20px;
  color: ${({ theme }) => theme.colors.text};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  &:last-child {
    border-bottom: none;
  }
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const PaginationButton = styled.button`
  padding: 8px 12px;
  margin: 0 5px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ active, theme }) =>
    active ? theme.colors.primary : '#fff'};
  color: ${({ active, theme }) => (active ? '#fff' : theme.colors.text)};
  cursor: pointer;
  border-radius: 6px;
  &:hover {
    background-color: ${({ active, theme }) =>
      active ? theme.colors.primary : theme.colors.primaryLight};
  }
`;
