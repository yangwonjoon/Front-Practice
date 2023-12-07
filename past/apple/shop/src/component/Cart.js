import { Table } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import { cartPlus, change } from '../store';

function Cart() {

    let user = useSelector((state) => state.user)
    let cart = useSelector((state) => state.cart)
    let dispatch = useDispatch()

    return (
        <>
            <div className="container">

                <Table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>이름</th>
                            <th>수량</th>
                            <th>추가</th>
                        </tr>
                    </thead>

                    {
                        cart.map(function (a, i) {
                            return (
                                <tbody key={i}>
                                    <tr>
                                        <td>{cart[i].id}</td>
                                        <td>{cart[i].title}</td>
                                        <td>{cart[i].count}</td>
                                        <td><button onClick={() => {
                                            dispatch(cartPlus(i))
                                        }}>+</button></td>
                                    </tr>
                                </tbody>
                            )

                        })

                    }

                </Table>
                <button onClick={() => { dispatch(change()) }}>바꾸기</button>
            </div >
        </>
    )
}

export default Cart;