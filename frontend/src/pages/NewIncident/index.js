import React, { useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { Container, IncidentContainer, Information, Form, ButtonContainer } from './styles';
import logoImg from '../../assets/logo.svg';

import api from '../../services/api';

export default function NewIncident() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const ongId = localStorage.getItem('ong_access');

  const history = useHistory();

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    const payload = { title, description, value };
    
    try {
      await api.post('incidents', payload, {
        headers: {
          Authorization: ongId,
        }
      })

      alert('Caso criado com sucesso!');

      history.push('/profile');
    } catch (err) {
      alert('Erro ao tentar cadastrar um novo caso.');
    }
  })

  return (
    <Container>
      <IncidentContainer>
        <Information>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadastrar novo caso</h1>

          <p>Descreve o caso detalhadamente para encontrar um herói para resolver isso.</p>

          <Link to="/profile">
            <FiArrowLeft size={22} color="#E02041" />
            Voltar para home
          </Link>
        </Information>
        <Form onSubmit={handleSubmit}>
          <input 
            placeholder="Título do caso"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea 
            placeholder="Descrição" 
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input 
            placeholder="Valor em reais" 
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <ButtonContainer>
            <Link className="button" to="/profile">Cancelar</Link>
            <button type="submit" className="button">Cadastrar</button>
          </ButtonContainer>
        </Form>
      </IncidentContainer>
    </Container>
  );
}
