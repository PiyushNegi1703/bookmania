import * as React from 'react';
import PropTypes from 'prop-types';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import nav from '../nav.png';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import { CssBaseline } from '@mui/material';

function RegisterElevation(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

RegisterElevation.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function RegisterNav(props) {
  return (
    <CssBaseline>
        <RegisterElevation {...props}>
            <AppBar>
                <Typography variant='h6' component='div'>
                    <nav>
                        <img src={nav} alt="" />
                        <input type="search" placeholder="Search Here..." value={props.q} onChange={props.setChange} className='search' />
                        <h3 style={{color : 'black'}}>Hello {sessionStorage.getItem('username').toUpperCase()}!</h3>
                    </nav>
                </Typography>
            </AppBar>
        </RegisterElevation>
    </CssBaseline>
    
  )
}
