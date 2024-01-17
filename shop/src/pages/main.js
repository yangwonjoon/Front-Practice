export const Main = ({ shoes }) => {
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
            </div></>
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