import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Productos from "../Components/Productos";
import { data } from "../utils/database";


const Products = () => {
  console.log(data);
  return (
    <>
    <Header/>
  <Productos/>
  <Footer/>
    </>   
  );
};

export default Products;
