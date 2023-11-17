import {useDispatch, useSelector} from "react-redux";
import CartList from "./CartList";
import {deleteAll} from "../../actions/cart";

function Cart() {
    const cart = useSelector(state => state.cartReducer);
    const dispatch = useDispatch();
    const sum = cart.reduce((sum, item)=> {
        const priceNew = (item.info.price * (100 - item.info.discountPercentage) / 100);
        sum += item.quantity *  priceNew;
        return sum ;
    }, 0)

    const hanleDeleteAll = ()=> {
        dispatch(deleteAll());
    }

    return (<>
        <h2>gior hangf</h2>
        <button onClick={hanleDeleteAll}>xoa tat ca</button>
        <div>
            {cart.length > 0 ? (<>
                    <CartList/>
                    <div className="cart__total">
                        tong tien: <span>{sum.toFixed(2)}$</span>
                    </div>
                </>

            ) : (<>gio hang trong </>)}
        </div>


    </>)
}

export default Cart;
