import React, { useState, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { Container, RegisterContainer, Information, Form, InputContainer } from './styles';
import logoImg from '../../assets/logo.svg';

import api from '../../services/api';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf
    }

    try {
      const response = await api.post('/ongs', data);
  
      const { ong_id } = response.data;

      localStorage.setItem('ong_access', ong_id);

      history.push('/')
    } catch (err) {
      alert('Erro ao criar ONG.');
    }
  })

  return (
    <Container>
      <RegisterContainer>
        <Information>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadastro</h1>

          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG</p>

          <Link to="/">
            <FiArrowLeft size={22} color="#E02041" />
            Voltar para o logon
          </Link>
        </Information>
        <Form onSubmit={handleSubmit}>
          <input  
            placeholder="Nome da ONG" 
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input  
            placeholder="E-mail" 
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input  
            placeholder="WhatsApp" 
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
          />
          <InputContainer>
            <input  
              placeholder="Cidade" 
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <input  
              placeholder="UF"  
              maxLength="2" 
              value={uf}
              onChange={e => setUf(e.target.value)}
            />
          </InputContainer>
          <button type="submit" className="button">Cadastrar</button>
        </Form>
      </RegisterContainer>
    </Container>
  );
}
