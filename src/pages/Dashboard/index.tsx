import React, { useState, FormEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

import { Header, Main, Form, Repositories, Error } from './styles';
import logoImage from '../../assets/github-logo.svg';
import api from '../../services/api';
import Repository from '../Repository';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [inputRepo, setInputRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storangedRpositories = localStorage.getItem(
      '@GihubExplorer:repository',
    );

    if (storangedRpositories) {
      return JSON.parse(storangedRpositories);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@GihubExplorer:repository',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleAddRepo(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    if (!inputRepo) {
      setInputError('Digite o autor/nome do repositório.');
      return;
    }

    const existRepository = localStorage
      .getItem('@GihubExplorer:repository')
      ?.toUpperCase()
      ?.indexOf(inputRepo.toUpperCase());

    if (existRepository !== -1) {
      setInputError('Esse repositório já existe na lista');
      setTimeout(() => {
        setInputError('');
      }, 5000);
      return;
    }

    try {
      const response = await api.get(`repos/${inputRepo}`);

      const repository = response.data;

      setRepositories([...repositories, repository]);
      setInputRepo('');
      setInputError('');
    } catch (error) {
      setInputError('Erro na busca por esse repositório.');
    }
  }

  return (
    <>
      <Header>
        <img src={logoImage} alt="Logo" />
      </Header>
      <Main>
        <header>
          <h1>Explore repositórios no Github</h1>
        </header>

        <Form hasError={!!inputError} onSubmit={handleAddRepo}>
          <input
            onChange={(e) => setInputRepo(e.target.value)}
            placeholder="Digite o nome do repositório"
            value={inputRepo}
          />
          <button type="submit">Pesquisar</button>
        </Form>
        {inputError && <Error>{inputError}</Error>}
        <Repositories>
          {repositories.map((repository) => (
            <Link
              key={repository.full_name}
              to={`/repository/${repository.full_name}`}
            >
              <img
                src={repository.owner.avatar_url}
                alt={repository.owner.login}
              />

              <div>
                <strong>{repository.full_name}</strong>
                <span>{repository.description}</span>
              </div>
              <FiChevronRight size={20} />
            </Link>
          ))}
        </Repositories>
      </Main>
    </>
  );
};

export default Dashboard;
