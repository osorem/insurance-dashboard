import { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { Box, styled } from '@mui/material';
import { useWindowSize } from '@/hooks/useWindowSize';

interface PageTitleWrapperProps {
  children?: ReactNode;
}

const PageTitleWrapper: FC<PageTitleWrapperProps> = ({ children }) => {
  const size = useWindowSize();

  const PageTitle = styled(Box)(
    ({ theme }) => `
        padding: ${theme.spacing(size.width > 600 ? 4 : 2)};
`
  );

  return (
    <>
      <PageTitle className="MuiPageTitle-wrapper">{children}</PageTitle>
    </>
  );
};

PageTitleWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default PageTitleWrapper;
