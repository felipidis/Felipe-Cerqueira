import React from 'react';
import MUIAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import styled from 'styled-components'

const StyledMUI = styled(MUIAppBar)`
display: flex;
align-items: center;
`

export default function AppBar() {

  return (
    <div >
      <StyledMUI position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            AstroMatch
          </Typography>
          <WhatshotIcon fontSize='large'/>
        </Toolbar>
      </StyledMUI>
    </div>
  );
}