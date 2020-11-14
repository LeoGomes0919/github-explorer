import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Header, Container, Issues } from './styles';

import logoImage from '../../assets/github-logo.svg';
import LoadPlaceholder from '../../components/loadPlaceholder';
import api from '../../services/api';

interface RepositoryParams {
  repo: string;
}

interface Repo {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  open_issues: number;
  forks: number;
  stargazers_count: number;
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  const [repository, setRepository] = useState<Repo | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    api.get(`repos/${params.repo}`).then((response) => {
      setRepository(response.data);
    });

    api.get(`repos/${params.repo}/issues`).then((response) => {
      setIssues(response.data);
    });
  }, [params.repo]);

  return (
    <>
      <Header>
        <img src={logoImage} alt="Logo Github" />
        <div>
          <Link to="/">
            <FiChevronLeft size={20} />
            <span>Voltar</span>
          </Link>
        </div>
      </Header>
      {repository ? (
        <Container>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={`${repository.owner.login}`}
            />
            <div>
              <h1>{repository.full_name}</h1>
              <span>{repository.description}</span>
            </div>
          </header>
          <aside>
            <div>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </div>
            <div>
              <strong>{repository.forks}</strong>
              <span>Forks</span>
            </div>
            <div>
              <strong>{repository.open_issues}</strong>
              <span>Issues abertas</span>
            </div>
          </aside>
          <section>
            <Issues>
              {issues.map((issue) => (
                <a key={issue.id} href={issue.html_url}>
                  <div>
                    <strong>{issue.title}</strong>
                    <span>{issue.user.login}</span>
                  </div>
                  <FiChevronRight size={20} />
                </a>
              ))}
            </Issues>
          </section>
        </Container>
      ) : (
        <LoadPlaceholder />
      )}
    </>
  );
};

export default Repository;
