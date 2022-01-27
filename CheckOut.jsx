const CheckOut = ({cart, setCart, total, setTotal}) => {
    const finalList = cart.map((item, index) => {
        return (
            <div key={index} index={index}>
                {item.name}
            </div>
        )
    });
    const checkOut = () => {
        let costs = cart.map((item) => item.cost);
        const reducer = (accum, current) => accum + current;
        let newTotal = costs.reduce(reducer, 0);
        setTotal(0);
        setCart([]);
    };
    return (
        <>
            <h1>Check Out</h1>
            <Button onClick={checkOut}>Check Out ${total}</Button>
            <div> {total > 0 && finalList} </div>
        </>
    )
}