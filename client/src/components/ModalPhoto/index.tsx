import { IModalPhoto } from "../../interfaces";
import { HeaderModal } from "../HeaderModal";
import { Container } from "./style";

const ModalPhoto = ({ setOpenModalPhoto, cover_image, title }: IModalPhoto) => {
  return (
    <Container>
      <HeaderModal
        title="Imagem de veículo"
        setCloseModal={setOpenModalPhoto}
      />

      <img src={cover_image} alt={title} />
    </Container>
  );
};

export { ModalPhoto };
