import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// display a header
function Header() {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          AquaTerra Random Dog Assignment
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header;