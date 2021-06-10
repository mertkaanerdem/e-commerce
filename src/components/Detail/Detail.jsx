import React from "react";
import { Link } from "react-router-dom";

function Detail() {
  //const location = useLocation();
  // const history = useHistory();
  // const cartCtx = useContext(CartContext);

  // const backToHomeHandler = () => {

  //   history.push("/");
  // };

  // const addItemToCartHandler = (item) => {
  //   cartCtx.addItem(item);
  // };

  // useEffect(() => {
  //   const fetchItem = async () => {
  //     const response = await fetch(
  //       `https://fakestoreapi.com/products${location.pathname}`
  //     );
  //     const data = await response.json();
  //     const modifiedItem = { ...data, amount: 1 };
  //     setProducts(modifiedItem);
  //   };
  //   fetchItem();
  // }, [location]);

  // useEffect(() => {
  //   axios
  //     .get(`https://fakestoreapi.com/products${location.pathname}`)
  //     .then((response) => setProducts(response.data))
  //     .catch((error) => console.log(error.message));
  // }, []);

  return (
    <div>
      <h4>Details</h4>
      <Link to="/">Katalog</Link>
    </div>
  );
}

export default Detail;
