
import ProductDetailes from "../containers/Ecomerce/ProductDetailes"
import Card from "../containers/Ecomerce/ProductCards";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div className="text  body pt-4 pb-4">
      <ProductDetailes />
      <Card />
    </div>
  );
}
