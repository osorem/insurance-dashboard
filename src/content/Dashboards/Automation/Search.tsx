import { TextField, InputAdornment, IconButton, styled } from '@mui/material';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { useTranslation } from 'react-i18next';

const SearchInputWrapper = styled(TextField)(
  ({ theme }) => `
  
    .MuiSvgIcon-root {
      opacity: .7;
    }
  
    .MuiInputBase-input {
        font-size: ${theme.typography.pxToRem(17)};
    }
    
    .MuiInputBase-root {
        background: ${theme.colors.alpha.white[100]};
    }
  
    .MuiInputBase-adornedEnd {
      padding-right: ${theme.spacing(0.5)};
    }
  `
);

function Search({ searchText, setSearchText }: any) {
  const { t }: { t: any } = useTranslation();

  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <SearchInputWrapper
      type="text"
      value={searchText}
      onChange={handleChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchTwoToneIcon />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton>
              <ArrowForwardIcon />
            </IconButton>
          </InputAdornment>
        )
      }}
      placeholder={t('Enter Value(s)')}
      fullWidth
    />
  );
}

export default Search;
