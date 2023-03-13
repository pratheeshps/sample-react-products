import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
const GET_PRODUCTS_URL = "https://dummyjson.com/products";

function Product() {
  const { id } = useParams();
  const { data, loading } = useFetch(`${GET_PRODUCTS_URL}/${id}`);

  return (
    <>
      {data && (
        <div>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
        </div>
      )}
    </>
  );
}

export default Product;
