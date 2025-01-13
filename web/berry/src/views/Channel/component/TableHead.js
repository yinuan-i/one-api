import { TableCell, TableHead, TableRow, TableSortLabel, Box } from '@mui/material';
import { visuallyHidden } from '@mui/utils';

const ChannelTableHead = ({ order, orderBy, onRequestSort }) => {
  const createSortHandler = (field) => (event) => {
    onRequestSort(field);
  };

  return (
      <TableHead>
        <TableRow>
          <TableCell>
            <TableSortLabel
                active={orderBy === 'id'}
                direction={orderBy === 'id' ? order : 'asc'}
                onClick={createSortHandler('id')}
            >
              ID
              {orderBy === 'id' ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === 'desc' ? '降序排列' : '升序排列'}
                  </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
          <TableCell>名称</TableCell>
          <TableCell>分组</TableCell>
          <TableCell>类型</TableCell>
          <TableCell>状态</TableCell>
          <TableCell>响应时间</TableCell>
          <TableCell>已消耗</TableCell>
          <TableCell>
            <TableSortLabel
                active={orderBy === 'balance'}
                direction={orderBy === 'balance' ? order : 'asc'}
                onClick={createSortHandler('balance')}
            >
              余额
              {orderBy === 'balance' ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === 'desc' ? '降序排列' : '升序排列'}
                  </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
          <TableCell>优先级</TableCell>
          <TableCell>操作</TableCell>
        </TableRow>
      </TableHead>
  );
};

export default ChannelTableHead;