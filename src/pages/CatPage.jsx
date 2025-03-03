import { useState } from "react";
import styled from "styled-components";
import { CatLoader } from "../components/loadings/CatLoading";
import InputText from "../components/InputText";

const CatPageWrapper = styled.div`
  img {
    max-width: 100%;
    height: 70vh;
  }
  button {
    padding: 0.8rem;
    background-color: #404040;
    color: #f7f3dc;
    font-family: Inter, sans-serif;
    font-size: 1rem;
    border-radius: 1rem;
    border: none;
    cursor: pointer;
  }
`;

function CatPage() {
  const [catImageUrl, setCatImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [isLoaded, setIsLoaded] = useState(false); // Novo estado para garantir que a imagem só aparece quando estiver carregada

  const doFetch = async (urlEndpoints) => {
    setLoading(true);
    setError(false);
    setIsLoaded(false);

    try {
      const response = await fetch(urlEndpoints);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const url = response.url;
      setCatImageUrl(url);
    } catch (error) {
      setError(true);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  const handleChange = (e) => {
    setUserInput(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    if (userInput === "") {
      doFetch("https://cataas.com/cat");
    }
    if (userInput !== "") {
      doFetch(
        `https://cataas.com/cat/says/${userInput}?&fontColor=orange&fontSize=40`
      );
      setUserInput("");
    }
    // Adicionando os parênteses para a função executar corretamente
  };

  return (
    <CatPageWrapper className="page">
      <InputText
        placeholder={"Texto do gato!"}
        value={userInput}
        onChange={handleChange}
      />

      {loading && <CatLoader />}

      {!loading && error && <p>Ops! Tenta de novo!</p>}

      {!loading && catImageUrl && (
        <img
          src={catImageUrl}
          alt="Random cat"
          style={{ display: isLoaded ? "block" : "none" }}
          onLoad={() => setIsLoaded(true)}
        />
      )}

      <button onClick={handleClick}>Gerar gatinho</button>
    </CatPageWrapper>
  );
}

export default CatPage;
