import { Toolbar } from '@mui/material';
import { HeaderAppBar, HeaderTitle } from '../../styles/components';

const Header = ({ title }) => {
  return (
    <HeaderAppBar elevation={0} position="fixed" color="default">
      <Toolbar>
        <HeaderTitle>{title}</HeaderTitle>
      </Toolbar>
    </HeaderAppBar>
  );
};

export default Header;
