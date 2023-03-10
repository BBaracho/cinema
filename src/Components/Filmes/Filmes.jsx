import React, { useState, useEffect } from "react";
import Footer from "../Footer";
import Header from "../Header";
import Items from "../Items/Items";
import axios from "axios";
import Buttons from "../Buttons/Buttons";

function Filmes() {
  let [lista, setLista] = useState([]);

  useEffect(() => {
    let url = "http://localhost:3000/filmes";

    const getPosts = async () => {
      const { data: res } = await axios.get(url);
      setLista(res);
    };
    getPosts();
  }, []);

  return (
    <div>
      <Header />
      <section>
        <h1 className="capa-filmes">FILMES</h1>
        <Items lista={lista} />
      </section>
      <div>
        <Buttons />
        <Footer />
      </div>
    </div>
  );
}
export default Filmes;
