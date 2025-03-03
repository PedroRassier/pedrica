import { useState } from "react";
import styled from "styled-components";
import { DogLoader } from "../components/loadings/DogLoading";

const DogPageWrapper = styled.div`
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

function DogPage() {
  const [dogImageUrl, setDogImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const doFetch = async () => {
    setLoading(true);
    setError(false);
    setIsLoaded(false);

    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const data = await response.json(); // Obtém o JSON corretamente
      setDogImageUrl(data.message); // Usa a URL da imagem correta
    } catch (error) {
      setError(true);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    doFetch();
  };

  return (
    <DogPageWrapper className="page">
      {loading && <DogLoader />}

      {!loading && error && <p>Ops! Tenta de novo!</p>}

      {!loading && dogImageUrl && (
        <img
          src={dogImageUrl}
          alt="Random dog"
          style={{ display: isLoaded ? "block" : "none" }}
          onLoad={() => setIsLoaded(true)}
        />
      )}

      <button onClick={handleClick}>Gerar Cachorrinho!</button>
    </DogPageWrapper>
  );
}

export default DogPage;
