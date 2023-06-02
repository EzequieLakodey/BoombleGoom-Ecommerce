// Context
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

// Components
import CategorySelector from '../CategorySelector/CategorySelector'
import DashBoard from '../DashBoard/DashBoard'

// Router Dom
import { NavLink } from 'react-router-dom'

// Material Ui
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Tooltip,
  MenuItem,
} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

/* Imports */

function NavBar() {
  const { CartItemCount } = useContext(CartContext)

  return (
    <nav>
      <Grid container maxWidth={'xl'} mt={10}>
        <AppBar position='sticky' color='inherit'>
          <Toolbar className='navbar-toolbar' disableGutters>
            <Grid>
              <MenuItem>
                <NavLink to={'/'} className={'home-link-container'}>
                  <Typography element='h1' className='nav-title'>
                    BoombleGoom
                  </Typography>
                </NavLink>
              </MenuItem>
            </Grid>

            <Grid>
              <MenuItem>
                <CategorySelector />
              </MenuItem>
            </Grid>

            <Grid>
              <MenuItem>
                <Tooltip title='View cart'>
                  <IconButton>{CartItemCount()}</IconButton>
                </Tooltip>
              </MenuItem>
            </Grid>

            <DashBoard />
          </Toolbar>
        </AppBar>
      </Grid>
    </nav>
  )
}

export default NavBar