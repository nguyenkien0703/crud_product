import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

function CartMini(){
    const cart = useSelector(state => state.cartReducer);
    const sum = cart.reduce((sum, item)=> {
        sum += item.quantity;
        return sum ;
    }, 0)
    return(
        <>
            <Link to="/cart">giỏ hàng: {sum}</Link>
        </>
    )
}
export default CartMini;
