const Product = ({index, product, products, setProducts, cart, setCart, total, setTotal}) => {
    const addToCart = e => {
        if (product.instock > 0) {
            let name = product.name;
            let newProducts = products.slice();
            newProducts[index].instock -= 1;
            let newProduct = products.filter((product) => product.name == name);
            let newTotal = total + newProduct[0].cost;
            setTotal(newTotal);
            setProducts(newProducts);
            setCart([...cart, products[index]]);
        }
    }
    return (
        <li>
            <Image src={product.photo} width={70} roundedCircle></Image>
            <button type='submit' onClick={e => addToCart(e)} className='btn btn-dark position-relative m-1'>
                <span className='text-primary'>{product.name}</span>: 
                <span className='text-success'> $</span>{product.cost}
                <span className={`position-absolute top-0 start-100 translate-middle badge rounded-pill ${product.instock > 0 ? 'bg-success' : 'bg-danger'}`}>{product.instock > 0 ? product.instock : 'out of stock'}</span>
            </button>
        </li>
    )
}