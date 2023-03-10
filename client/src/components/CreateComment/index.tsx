import { ICreateComment, IUserProps } from "../../interfaces";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { AvatarUser } from "../AvatarUser";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { Container } from "./style";
import { Button } from "../Button";
import * as yup from "yup";

const CreateComment = ({ product, ListCommentsFunc }: ICreateComment) => {
  const token = sessionStorage.getItem("Motors shop: token");

  const [user, setUser] = useState<IUserProps>({} as IUserProps);

  const [disable, setDisable] = useState<boolean>(false);

  const [load, setLoad] = useState<boolean>(false);

  const [resetInput, setResetInput] = useState("");

  const handleChange = (event: any) => {
    setResetInput(event.target.value);
  };

  useEffect(() => {
    token ? setDisable(false) : setDisable(true);

    token &&
      api
        .get("/users/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => setUser(res.data))
        .catch((error) => console.error(error));
  }, []);

  const schema = yup.object().shape({
    content: yup.string().required(""),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data: any) => {
    setLoad(true);
    setResetInput("");

    api
      .post(`/comments/${product?.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => ListCommentsFunc(res.data))
      .catch((error) => console.error(error))
      .finally(() => setLoad(false));
  };

  return (
    <Container>
      {token && <AvatarUser username={user.name} />}

      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <textarea
          placeholder="Digitar comentário"
          {...register("content")}
          name="content"
          disabled={disable ? disable : load}
          onChange={handleChange}
          value={resetInput}
          required={true}
        />
        <Button
          size="buttonSizeProductCarDetails"
          color="buttonColorBlueLogin"
          type="submit"
          disabled={disable ? disable : load}
        >
          {load ? "Comentando..." : "Comentar"}
        </Button>
      </form>

      <div className="divTexts">
        <p>Gostei muito!</p>
        <p>Incrível</p>
        <p>Recomendarei para meus amigos!</p>
      </div>
    </Container>
  );
};

export { CreateComment };
