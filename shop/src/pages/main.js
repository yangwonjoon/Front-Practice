import axios from 'axios'
import { useState } from 'react'

export const Main = ({ shoes, setShoes }) => {

    const [clickNum, setClickNum] = useState(0)
//해
    return (
        <>
            <div>
                <img className='main-bg' src={process.env.PUBLIC_URL + '/bg.png'} />
            </div>

            <div className="row">
                {
                    shoes.map(function (shoe, i) {
                        return (
                            <Detail shoe={shoe} key={i} i={i}></Detail>
                        )
                    })
                }
            </div>
            <button onClick={() => {



                if (clickNum == 1) {
                    axios.get('https://codingapple1.github.io/shop/data2.json')
                        .then((res) => {
                            let copy = res.data
                            setShoes([...shoes, ...copy])
                        })
                        .catch((err) => {
                            console.log(err)
                        })
                }
                if (clickNum == 2) {
                    axios.get('https://codingapple1.github.io/shop/data3.json')
                        .then((res) => {
                            let copy = res.data
                            setShoes([...shoes, ...copy])
                        })
                        .catch((err) => {
                            console.log(err)
                        })
                }

            }}>버튼</button >

        </>
    )
}


function Detail({ shoe, i }) {

    return (
        <div className="col-md-4">
            <img src={"https://codingapple1.github.io/shop/shoes" + (i + 1) + ".jpg"} width="80%" />
            <h4>{shoe.title}</h4>
            <p>{shoe.price}</p>
        </div>
    )
}