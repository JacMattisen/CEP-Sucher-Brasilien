import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import "./styles.css";
import { FaMapMarkerAlt, FaRoad, FaHome, FaMapMarkedAlt } from 'react-icons/fa'; //ícones do react-icons, esta no H2.


import api from './service/api';

function App() {

  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});
 


  async function handleSearch() {
    if (input === '') {
      alert("Digite um CEP para buscar");
      return;
    }

    try {
      const response = await api.get(`/${input}/json/`);
      setCep(response.data);
      setInput('');
    } catch (error) {
      console.error("Erro ao buscar o CEP:", error);
      alert("Erro ao buscar o CEP. Tente novamente.");
      setInput('');
    }
  }

  return (
    <div className="container">
      <h1 className="title"> Buscador CEP</h1>
      
      <div className="containerInput">
        <input
          type="text"
          className="input"
          placeholder="Digite o CEP"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#FFF"/>
        </button>
      </div>
      
      {Object.keys(cep).length > 0 && ( //forma para buscar no JavaScript se o objeto tem alguma propriedade usamos Object.keys e length para tamanho
        <main className="main">
          <h2><FaMapMarkerAlt color="red" /> CEP: {cep.cep} <FaMapMarkerAlt color="red" /></h2>
          <span><FaRoad />  {cep.logradouro}</span>
          <span><FaHome />  {cep.bairro}</span>
          <span><FaMapMarkedAlt />  {cep.localidade} / {cep.uf}</span>

        </main>
      )}
    </div>
  );
}

export default App;
