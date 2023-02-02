import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import "./Carousel.css"

function Slider() {
  return (
    <div className='Carousel-parent'>
      <Carousel style={{ height: "70vh" }}>
        <Carousel.Item interval={3000}>
          <div className='bloco'>
            {/* <h1>Top Gun: Maverick</h1>
            <p>Mais vendido</p> */}
          </div>
          <img
            src="https://theaviationist.com/wp-content/uploads/2022/05/Top-Gun-Maverick-movie-top.jpeg"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <div className='bloco'>
            {/* <h1>A Mulher Rei</h1>
            <p>Sessão começando agora</p> */}
          </div>
          <img
            src="https://blogger.googleusercontent.com/img/a/AVvXsEjxiYh9sGOWrwie3TU6UNEZrQ8-jCt0gbooTgY7dMpeFbfgQA4w2wUtRtwDN20Bi-ldEEiusbtK6G3ZxvRD0s_7jCTPSiZv3jiqvSZRJddg97f8cHxxTo1yqTtBpDTVq_qIL0KGIcigFLvzkLhwoG7SxGtDEfUPYpbNwV-Ys7gpDTW2fjgpkZou7P2Q=s16000"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <div className='bloco'>
            {/* <h1>Gato de Botas 2: o Último Pedido</h1>
            <p>Lançamento</p> */}
          </div>
          <img
            src="https://pipocasclub.com.br/wp-content/uploads/2022/12/ogatodebotas2pipocasclub.png"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
