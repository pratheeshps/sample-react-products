import { useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import withSearch from "../hoc/withSearch";
const GET_PRODUCTS_URL = "https://dummyjson.com/products";

function Products({ searchTerm }) {
  const { loading, data, error } = useFetch(GET_PRODUCTS_URL);
  const navigate = useNavigate();

  if (error) {
    return <p>Something went wrong!</p>;
  }

  if (loading) {
    return <p>Loading....</p>;
  }

  const filteredProducts = data?.products?.filter(({ title, description }) => {
    const searchDetails = `${title} ${description}`.toLowerCase();
    return searchDetails.includes(searchTerm.toLowerCase());
  });

  if (filteredProducts?.length === 0) {
    return <p>No products found !</p>;
  }

  const handleNavigation = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <>
      <ul className="products-list">
        {filteredProducts &&
          filteredProducts.map(
            ({ price, thumbnail, title, id, description }) => (
              <li
                key={id}
                className="card"
                onClick={() => handleNavigation(id)}
              >
                <img src={thumbnail} height="100" alt={title} />
                <h4>{title}</h4>
                <p>{description}</p>
                <h3>${price}</h3>
              </li>
            )
          )}
      </ul>
    </>
  );
}

export default withSearch(Products);
