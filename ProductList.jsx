const ProductList = ({products, setProducts, cart, setCart, total, setTotal}) => {
    return (
        <>
            <h1>Product List</h1>
            <ul style={{ listStyleType: "none" }}>
                {products && products.map((product, index) => <Product key={index} index={index} setProducts={setProducts} products={products} product={product} cart={cart} setCart={setCart} total={total} setTotal={setTotal} />)}
            </ul>
        </>
    )
}