import { Link } from "react-router-dom";
import * as S from "./NotFound.styled";

export default function NotFoundPage() {
  return (
    <>
      <S.Container>
        <S.Text>Запрашиваемая вами страница не найдена!</S.Text>
        <Link to={"/"}>
          <S.Button>Вернуться на главную!</S.Button>
        </Link>
      </S.Container>
    </>
  );
}