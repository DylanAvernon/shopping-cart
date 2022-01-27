const CartContents = ({cart, setCart, total, setTotal, products, setProducts}) => {
    const deleteCartItem = (index) => {
        let newCart = cart.filter((item, i) => index != i);
        let newTotal = total - cart[index].cost;
        let newProducts = products.slice();
        newProducts.forEach(product => {
          if(product.id === cart[index].id) {
            product.instock += 1;
          } 
        });
        setProducts(newProducts);
        setTotal(newTotal);
        setCart(newCart);
    };
    let cartList = cart.map((item, index) => {
        return (
          <Card key={index} className=''>
            <Card.Header>
              {item.name}
              <i onClick={() => deleteCartItem(index)} className="bi bi-trash btn"></i>
            </Card.Header>
            <Card.Body>
              This product costs ${item.cost} each. We source it directly from {item.country}
            </Card.Body>
            {/* <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey={1 + index}>
                {item.name}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse
              onClick={() => deleteCartItem(index)}
              eventKey={1 + index}
            >
              <Card.Body>
                $ {item.cost} from {item.country}
              </Card.Body>
            </Accordion.Collapse> */}
          </Card>
        );
    });
    return (
        <>
            <h1>Cart Contents</h1>
            <Accordion>{cartList}</Accordion>
        </>
    );
}