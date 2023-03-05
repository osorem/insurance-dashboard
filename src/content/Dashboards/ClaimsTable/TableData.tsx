import { FC, ChangeEvent, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  Divider,
  Box,
  Button,
  FormControl,
  // InputLabel,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableContainer,
  Select,
  Menu,
  MenuItem,
  Typography,
  CardHeader,
  Modal,
  useTheme
} from '@mui/material';

import { ClaimsModel, ClaimStatus } from 'src/models/claims';
import { useTranslation } from 'react-i18next';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import DashboardClaimsContent from 'src/content/DashboardPages/claims';

interface RecentOrdersTableProps {
  className?: string;
  claims: ClaimsModel[];
}

interface Filters {
  status?: ClaimStatus;
}

const applyFilters = (
  claims: ClaimsModel[],
  filters: Filters
): ClaimsModel[] => {
  return claims.filter((claim) => {
    let matches = true;

    if (filters.status && claim.status !== filters.status) {
      matches = false;
    }

    return matches;
  });
};

const applyPagination = (
  claims: ClaimsModel[],
  page: number,
  limit: number
): ClaimsModel[] => {
  return claims.slice(page * limit, page * limit + limit);
};

const RecentOrdersTable: FC<RecentOrdersTableProps> = ({ claims }) => {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    p: 0,
    overflow: 'scroll',
    outline: 'none',
    width: '80vw',
    height: '80vh',
    [theme.breakpoints.down('md')]: {
      width: '90vw'
    }
  };

  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const [filters, setFilters] = useState<Filters>({
    status: null
  });

  const actionRef1 = useRef<any>(null);
  const [openSort, setOpenMenuSort] = useState<boolean>(false);
  // const [sort, setSort] = useState<string>('Sort by...');
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const statusOptions = [
    {
      id: 'all',
      name: 'All'
    },
    {
      id: 'Completed',
      name: t('Completed')
    },
    {
      id: 'Pending',
      name: t('Pending')
    },
    {
      id: 'Failed',
      name: t('Failed')
    }
  ];

  const sorts = [
    {
      value: '1',
      text: t('Sort by ID')
    },
    {
      value: '2',
      text: t('Sort by license plate (claimant)')
    },
    {
      value: '3',
      text: t('Sort by license plate (other)')
    },
    {
      value: '4',
      text: t('Sort by opponent company')
    },
    {
      value: '5',
      text: t('Sort by date of accident')
    },
    {
      value: '6',
      text: t('Sort by status')
    },
    {
      value: '7',
      text: t('Sort by date of last update')
    }
  ];

  const handleStatusChange = (e: ChangeEvent<HTMLInputElement>): void => {
    let value = null;

    if (e.target.value !== 'all') {
      value = e.target.value;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      status: value
    }));
  };

  const handlePageChange = (_event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };

  const filteredclaims = applyFilters(claims, filters);
  const paginatedclaims = applyPagination(filteredclaims, page, limit);

  return (
    <>
      <Card>
        <CardHeader
          action={
            <Box width={180} display="flex" gap={1}>
              <FormControl variant="outlined">
                {/* <InputLabel>{t('Status')}</InputLabel> */}
                <Select
                  value={filters.status || 'all'}
                  onChange={handleStatusChange}
                  // label={t('Status')}
                  autoWidth
                >
                  {statusOptions.map((statusOption) => (
                    <MenuItem key={statusOption.id} value={statusOption.id}>
                      {statusOption.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <Button
                variant="outlined"
                ref={actionRef1}
                onClick={() => setOpenMenuSort(true)}
                endIcon={<ExpandMoreTwoToneIcon fontSize="small" />}
                sx={{
                  color: '#CBCCD2',
                  fontWeight: '300',
                  borderColor: '#484C63'
                }}
              >
                Sort
              </Button>
              <Menu
                disableScrollLock
                anchorEl={actionRef1.current}
                onClose={() => setOpenMenuSort(false)}
                open={openSort}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right'
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
              >
                {sorts.map((_sort) => (
                  <MenuItem
                    key={_sort.value}
                    onClick={() => {
                      setOpenMenuSort(false);
                    }}
                  >
                    {_sort.text}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          }
          title={t('Claims')}
        />
        <Divider />
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>{t('ID Number')}</TableCell>
                <TableCell>{t('License Plate (Claimant)')}</TableCell>
                <TableCell>{t('License Plate (Other)')}</TableCell>
                <TableCell align="right">{t('Opponent Company')}</TableCell>
                <TableCell align="right">{t('Date of Accident')}</TableCell>
                <TableCell align="right">{t('Status')}</TableCell>
                <TableCell align="right">{t('Date of Last Update')}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedclaims.map((claim) => {
                return (
                  <TableRow
                    hover
                    sx={{
                      cursor: `pointer`
                    }}
                    key={claim.id}
                    selected={false}
                    onClick={() => handleOpen()}
                  >
                    <TableCell>
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        color="text.primary"
                        gutterBottom
                        noWrap
                      >
                        {claim.id}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" color="text.secondary" noWrap>
                        {claim.licensePlateClaimant}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" color="text.secondary" noWrap>
                        {claim.licensePlateOther}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography variant="body2" color="text.secondary" noWrap>
                        {claim.opponentCompany}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography variant="body2" color="text.secondary" noWrap>
                        {claim.dateOfAccident}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography variant="body2" color="text.secondary" noWrap>
                        {claim.status}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography variant="body2" color="text.secondary" noWrap>
                        {claim.dateOfLastUpdate}
                      </Typography>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <Box p={2}>
          <TablePagination
            component="div"
            count={filteredclaims.length}
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleLimitChange}
            page={page}
            rowsPerPage={limit}
            rowsPerPageOptions={[5, 10, 25, 30]}
          />
        </Box>
      </Card>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ padding: 0 }}
      >
        <Box sx={style} p={0}>
          <DashboardClaimsContent />
        </Box>
      </Modal>
    </>
  );
};

RecentOrdersTable.propTypes = {
  claims: PropTypes.array.isRequired
};

RecentOrdersTable.defaultProps = {
  claims: []
};

export default RecentOrdersTable;
