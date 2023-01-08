import PropTypes from 'prop-types';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import nav from '../nav.png';
import { Link } from 'react-router-dom'
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { cloneElement } from 'react';

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const theme = createTheme({
  typography: {
    fontSize : 12
  },
  palette: {
    primary : {
      main : '#f44336'
    }
  }
})

export default function MainNav(props) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <ElevationScroll {...props}>
            <AppBar>
                <Typography variant='h6' component='div'>
                    <nav>
                        <img src={nav} alt="" />
                        <input type="search" placeholder="Search Here..." value={props.q} onChange={props.setChange} className='search' />
                        <Link to='/register'><Button variant="contained" sx={{fontFamily : 'serif'}} color='primary'>Register</Button></Link>
                        {/* <DarkMode /> */}
                    </nav>
                </Typography>
            </AppBar>
        </ElevationScroll>
      </CssBaseline>
    </ThemeProvider>
    
    
  )
}
