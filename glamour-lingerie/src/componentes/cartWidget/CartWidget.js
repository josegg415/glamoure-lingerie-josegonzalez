import { useContext } from 'react';
import { cartContext } from '../../context/CartContext';
import {BsFillCartPlusFill} from 'react-icons/bs';
import { Link } from 'react-router-dom';


const CartWidget = () => {

  const { cartQuantity } = useContext(cartContext)

   return (

    <div>
        < Link to='/cart'>
        < BsFillCartPlusFill  size='2rem' color='blue'  className='mx-4' />
        <span>{cartQuantity()}</span>
        </Link>

    </div>


   )
}

export default CartWidget