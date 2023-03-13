import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
const GET_PRODUCTS_URL = "https://dummyjson.com/products";

function Product() {
  const { id } = useParams();
  const { data, loading } = useFetch(`${GET_PRODUCTS_URL}/${id}`);

  if (loading) {
    return <p>Loading....</p>;
  }

  return (
    <>
      {data && (
        <div>
          <h1>{data.title}</h1>
          <b>Rating : {data.rating}</b>
          <div className="product-images">
            {data.images.map((img) => (
              <img src={img} width="100" height="100" />
            ))}
          </div>
          <p>{data.description}</p>
          <h3>${data.price}</h3>
        </div>
      )}
    </>
  );
}

export default Product;
