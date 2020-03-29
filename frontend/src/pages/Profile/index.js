import React, { useEffect, useState, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import { Container, ProfileCases, ProfileCasesItem, CasesTitle } from './styles';
import api from '../../services/api';

import LogoImg from '../../assets/logo.svg';

export default function Profile() {
  const [ongName, setOngName] = useState('');
  const [incidents, setIncidents] = useState([]);

  const ongStorageName = localStorage.getItem('ong_name');
  const ongId = localStorage.getItem('ong_access');

  const history = useHistory();

  useEffect(() => {
    setOngName(ongStorageName);

    async function getIncidents() {
      try {
        const response = await api.get('profile', {
          headers: {
            Authorization: ongId,
          }
        });

        const data = response.data.map(incident => {
          const formatValue = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(incident.value);

          return {
            ...incident,
            value: formatValue,
          }
        })

        setIncidents(data);
      } catch (err) {
        alert('Erro ao listar seus incidentes.');
      }
    }

    getIncidents();
  }, [incidents])

  const handleDelete = useCallback(async (incident_id) => {
    try {
      await api.delete(`incidents/${incident_id}`, {
        headers: {
          Authorization: ongId,
        }
      })

      alert('Caso deletado com sucesso!');
    } catch (err) {
      alert('Erro ao tentar deletar este caso.');
    }
  })

  const handleLogout = useCallback(() => {
    const keys = ['ong_name', 'ong_access'];

    keys.forEach(key => {
      localStorage.removeItem(key);
    });

    history.push('/')
  })

  return (
    <Container>
      <header>
        <img src={LogoImg} alt="Be The Hero"/>
        <span>{ongName}</span>

        <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
        <button type="button" onClick={handleLogout}>
          <FiPower size={18} color="#E02041" />
        </button>
      </header>

      <CasesTitle>Casos cadastrados</CasesTitle>

      <ProfileCases>
        {incidents?.map(incident => (
          <ProfileCasesItem key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{incident.description}</p>

            <strong>VALOR:</strong>
            <p>{incident.value}</p>

            <button type="button" onClick={() => handleDelete(incident.id)}>
              <FiTrash2 size={20} color="#A8A8B3" />
            </button>
          </ProfileCasesItem>
        ))}
      </ProfileCases>
    </Container>
  );
}
