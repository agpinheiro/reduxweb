import React from 'react';
import { MdShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';
import tenis from '../../assets/images/tenis.jpg';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img src={tenis} alt="tenis" />
        <strong>Tenis preto</strong>
        <span>R$120,00</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>

      <li>
        <img src={tenis} alt="tenis" />
        <strong>Tenis preto</strong>
        <span>R$120,00</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>

      <li>
        <img src={tenis} alt="tenis" />
        <strong>Tenis preto</strong>
        <span>R$120,00</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>

      <li>
        <img src={tenis} alt="tenis" />
        <strong>Tenis preto</strong>
        <span>R$120,00</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>

      <li>
        <img src={tenis} alt="tenis" />
        <strong>Tenis preto</strong>
        <span>R$120,00</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>

      <li>
        <img src={tenis} alt="tenis" />
        <strong>Tenis preto</strong>
        <span>R$120,00</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>

      <li>
        <img src={tenis} alt="tenis" />
        <strong>Tenis preto</strong>
        <span>R$120,00</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>

      <li>
        <img src={tenis} alt="tenis" />
        <strong>Tenis preto</strong>
        <span>R$120,00</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>

      <li>
        <img src={tenis} alt="tenis" />
        <strong>Tenis preto</strong>
        <span>R$120,00</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
