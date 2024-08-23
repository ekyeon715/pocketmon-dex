import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MOCK_DATA from "../mock";
import styled from "styled-components";

const DetailPage = styled.div`
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  height: 100vh;
  display: flex;
  place-items: center;
  flex-direction: column;
  justify-content: center;

  h2 {
    color: red;
  }

  img {
    height: 200px;
    width: 200px;
  }

  button {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    transition: background-color 0.2s ease; /* 배경색 변경 애니메이션 */

    &:hover {
      background-color: rgb(192, 190, 190); /* 호버 시 배경색 */
    }
  }
`;

const PokemonDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParms = new URLSearchParams(location.search);
  const pokemonId = queryParms.get("id"); // 포켓몬 ID 를 쿼리스트링으로부터 받아옵시다.

  const pokemon = MOCK_DATA.find((p) => p.id === Number(pokemonId));

  if (!pokemon) {
    return <div>포켓몬을 찾을 수 없습니다.</div>;
  }

  return (
    <DetailPage>
      <img src={pokemon.img_url} alt={pokemon.korean_name} />
      <h2>{pokemon.korean_name}</h2>
      <p>타입: {pokemon.types.join(", ")}</p>
      <p>{pokemon.description}</p>
      {/* {* onClick 이벤트를 완성해주세요. *} */}
      <button
        onClick={() => {
          navigate("/dex");
        }}
      >
        뒤로 가기
      </button>
    </DetailPage>
  );
};

export default PokemonDetail;
