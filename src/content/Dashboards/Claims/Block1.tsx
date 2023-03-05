import {
  Box,
  CardHeader,
  Card,
  List,
  ListItemAvatar,
  ListItem,
  ListItemText,
  Typography,
  Divider,
  Checkbox,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import ContactPhoneTwoToneIcon from '@mui/icons-material/ContactPhoneTwoTone';
import EvStationTwoToneIcon from '@mui/icons-material/EvStationTwoTone';
import PersonTwoToneIcon from '@mui/icons-material/PersonTwoTone';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import AccountBalanceWalletTwoToneIcon from '@mui/icons-material/AccountBalanceWalletTwoTone';
import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';
import Text from 'src/components/Text';

function Block1() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Card
      variant="outlined"
      sx={{
        p: 1,
        height: '310px'
      }}
    >
      <CardHeader
        sx={{
          p: 1
        }}
        disableTypography
        title={
          <Typography
            variant="h4"
            sx={{
              fontSize: `${theme.typography.pxToRem(16)}`
            }}
          >
            {t('Claims Summary')}
          </Typography>
        }
      />
      <Divider />
      <List
        sx={{
          py: 0
        }}
      >
        <ListItem
          sx={{
            alignItems: 'flex-start',
            p: 1
          }}
        >
          <ListItemAvatar
            sx={{
              mr: 2,
              display: 'flex',
              alignItems: 'center',
              minWidth: 0
            }}
          >
            <ContactPhoneTwoToneIcon
              sx={{
                fontSize: `${theme.typography.pxToRem(23)}`
              }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={<Typography variant="h4">{t('Status')}</Typography>}
            secondary={
              <Typography noWrap variant="subtitle2">
                {/* {t('Monthly sales reports')} */}
              </Typography>
            }
          />
          <Box alignSelf="center">
            <Typography variant="h4">
              <Text color="info">Completed</Text>
            </Typography>
          </Box>
        </ListItem>
        <Divider />
        <ListItem
          sx={{
            alignItems: 'flex-start',
            p: 1
          }}
        >
          <ListItemAvatar
            sx={{
              mr: 2,
              display: 'flex',
              alignItems: 'center',
              minWidth: 0
            }}
          >
            <EvStationTwoToneIcon
              sx={{
                fontSize: `${theme.typography.pxToRem(23)}`
              }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography variant="h4">{t('Identifying number')}</Typography>
            }
            secondary={
              <Typography noWrap variant="subtitle2">
                {/* {t('Visitors last week')} */}
              </Typography>
            }
          />
          <Box alignSelf="center">
            <Typography variant="h4">
              <Text color="info">xxx9829</Text>
            </Typography>
          </Box>
        </ListItem>
        <Divider />
        <ListItem
          sx={{
            alignItems: 'flex-start',
            p: 1
          }}
        >
          <ListItemAvatar
            sx={{
              mr: 2,
              display: 'flex',
              alignItems: 'center',
              minWidth: 0
            }}
          >
            <AccountBalanceWalletTwoToneIcon
              sx={{
                fontSize: `${theme.typography.pxToRem(23)}`
              }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={<Typography variant="h4">{t('Agency')}</Typography>}
            secondary={
              <Typography noWrap variant="subtitle2">
                {/* {t('Monthly sales reports')} */}
              </Typography>
            }
          />
          <Box alignSelf="center">
            <Typography variant="h4">
              <Text color="info">AXA</Text>
            </Typography>
          </Box>
        </ListItem>
        <Divider />
        <ListItem
          sx={{
            alignItems: 'flex-start',
            p: 1
          }}
        >
          <ListItemAvatar
            sx={{
              mr: 2,
              display: 'flex',
              alignItems: 'center',
              minWidth: 0
            }}
          >
            <MonetizationOnTwoToneIcon
              sx={{
                fontSize: `${theme.typography.pxToRem(23)}`
              }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography variant="h4">{t('Witnesses Present')}</Typography>
            }
            secondary={
              <Typography noWrap variant="subtitle2">
                {/* {t('Visitors last week.')} */}
              </Typography>
            }
          />
          <Box alignSelf="center">
            <Checkbox
              edge="start"
              checked={true}
              disableRipple
              color="primary"
              sx={{
                padding: 0.5,
                height: '4px'
              }}
            />
          </Box>
        </ListItem>
        <Divider />
        <ListItem
          sx={{
            alignItems: 'flex-start',
            p: 1
          }}
        >
          <ListItemAvatar
            sx={{
              mr: 2,
              display: 'flex',
              alignItems: 'center',
              minWidth: 0
            }}
          >
            <ChevronRightTwoToneIcon
              sx={{
                fontSize: `${theme.typography.pxToRem(23)}`
              }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={<Typography variant="h4">{t('Location')}</Typography>}
            secondary={
              <Typography noWrap variant="subtitle2">
                {/* {t('Monthly sales reports')} */}
              </Typography>
            }
          />
          <Box alignSelf="center">
            <Typography variant="h4">
              <Text color="info">New York</Text>
            </Typography>
          </Box>
        </ListItem>
        <Divider />
        <ListItem
          sx={{
            alignItems: 'flex-start',
            p: 1
          }}
        >
          <ListItemAvatar
            sx={{
              mr: 2,
              display: 'flex',
              alignItems: 'center',
              minWidth: 0
            }}
          >
            <PersonTwoToneIcon
              sx={{
                fontSize: `${theme.typography.pxToRem(23)}`
              }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography variant="h4">{t('Police intervention')}</Typography>
            }
            secondary={
              <Typography noWrap variant="subtitle2">
                {/* {t('Visitors last week')} */}
              </Typography>
            }
          />
          <Box alignSelf="center">
            <Typography variant="h4">
              <Text color="info">No</Text>
            </Typography>
          </Box>
        </ListItem>
        <Divider />
      </List>
    </Card>
  );
}

export default Block1;
