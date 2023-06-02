/* eslint-disable react/react-in-jsx-scope */
// React
import { useContext } from 'react'

// React Router Dom
import { useNavigate } from 'react-router'

// Material ui
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
  Button,
  IconButton,
  Box,
} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import RemoveIcon from '@mui/icons-material/Remove'

// Context
import { CartContext } from '../../contexts/CartContext'

// Hooks
import useResizeImage from '../../utils/hooks/useResizeImage'

/* Imports */

const Cart = () => {
  const { width, height } = useResizeImage(5 * 16, 5 * 16)
  const { cart, removeItemFromCart, clearCart } = useContext(CartContext)
  const navigateToPage = useNavigate()
  const hasItems = cart.length > 0

  return (
    <article>
      <Grid mt={'1rem'} maxWidth={'xl'}>
        <Box maxWidth={1} className='card-box-container'>
          {cart.map((i, index) => (
            <Card className='card-container' key={index}>
              <CardContent className='cart-cards-content'>
                <Grid container spacing={2} alignItems='center'>
                  <Grid item xs={4}>
                    <CardMedia
                      style={{ width: width, height: height }}
                      component='img'
                      image={i.image}
                      alt={i.title}
                    />
                  </Grid>

                  <Grid item xs={5}>
                    <Container className='cart-typography-container'>
                      <Typography variant='inherit' component='p'>
                        {i.title}
                      </Typography>

                      <Typography variant='inherit' component='p'>
                        Qty {i.count} ({Math.ceil(i.price)}$)
                      </Typography>

                      <Typography variant='inherit' component='p'>
                        Total {Math.ceil(i.price) * i.count + ' $'}
                      </Typography>
                    </Container>
                  </Grid>

                  <Grid item xs={3}>
                    <IconButton
                      onClick={() => {
                        removeItemFromCart(i)
                      }}>
                      <RemoveIcon fontSize='large' />
                    </IconButton>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          ))}

          <Container className='cart-btns-container'>
            {hasItems && (
              <Button
                className='cart-proceed-btn'
                variant='outlined'
                onClick={() => {
                  navigateToPage('/order')
                }}>
                Proceed
              </Button>
            )}

            {hasItems && (
              <Button
                variant='outlined'
                onClick={clearCart}
                className='cart-clear-btn'>
                Clear cart
              </Button>
            )}
          </Container>
        </Box>
      </Grid>
    </article>
  )
}

export default Cart