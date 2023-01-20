import { IListProducts } from "../../interfaces";
import { EmptyMessage } from "../EmptyMessage";
import { Product } from "../Product";
import { Container } from "./style";

const ListMotorcycles = ({ products }: IListProducts) => {
  return (
    <Container id="motorcycles">
      <h2>Motos</h2>

      <menu>
        {products.length > 0 ? (
          products.map((product) => (
            <Product product={product} key={product.id} />
          ))
        ) : (
          <EmptyMessage message="Não há motos" />
        )}
      </menu>
    </Container>
  );
};

export { ListMotorcycles };
