//=========Cart=============
/*
  The cart is an Accordion that contains a list
  of 
*/

const Products = (props) => {
  const [url, setUrl] = useState("http://localhost:5500/products.json");
  const [{ data, isLoading, isError }, fetchData] = useDataApi("http://localhost:5500/products.json", []);
  const [products, setProducts] = React.useState(data);
  const [cart, setCart] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  useEffect(() => {
    setProducts(data);
  }, [data]);
  const restockProducts = (url) => {
    fetchData(url);
  };
  return (
    <Container>
      <Row>
        <Col>
          <ProductList products={products} setProducts={setProducts} cart={cart} setCart={setCart} total={total} setTotal={setTotal} />
        </Col>
        <Col>
          <CartContents cart={cart} setCart={setCart} products={products} setProducts={setProducts} total={total} setTotal={setTotal} />
        </Col>
        <Col>
          <CheckOut cart={cart} products={products} setCart={setCart} total={total} setTotal={setTotal} />
        </Col>
      </Row>
      <Row>
        <form
          onSubmit={(event) => {
            restockProducts(url);
            event.preventDefault();
          }}
        >
          <button className='btn btn-primary' type="submit">ReStock Products</button>
        </form>
      </Row>
    </Container>
  );
};
// ========================================
ReactDOM.render(<Products />, document.getElementById("root"));
