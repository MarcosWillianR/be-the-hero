import React, { useEffect, useState, useCallback } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import { Container, FormContainer } from './styles';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

import api from '../../services/api';

export default function Logon() {
  const [ongId, setOngId] = useState('');

  const history = useHistory();

  useEffect(() => {
    const ong_id = localStorage.getItem('ong_access');

    if (ong_id) {
      setOngId(ong_id);
    }
  }, [])

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('sessions', { ong_id: ongId });

      const { name } = response.data;

      localStorage.setItem('ong_name', name);
      localStorage.setItem('ong_access', ongId);

      history.push('/profile');
    } catch (err) {
      alert('Erro ao encontrar ONG');
    }
  });

  return (
    <Container>
      <FormContainer>
        <img src={logoImg} alt="Be The Hero" />


        <form onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>
          <input 
            placeholder="Sua ID"
            value={ongId}
            onChange={e => setOngId(e.target.value)}
          />
          <button type="submit" className="button">Entrar</button>

          <Link to="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </FormContainer>

      <img src={heroesImg} alt="Heroes" />
    </Container>
  );
}
