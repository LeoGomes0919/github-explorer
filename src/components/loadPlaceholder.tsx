import React from 'react';

import { Container, Profile } from './styles';

const LoadPlaceholder: React.FC = () => {
  return (
    <Container>
      <Profile>
        <div className="avatar" />
        <section>
          <div className="full-name" />
          <div className="description" />
        </section>

        <aside className="details-repo">
          <div />
          <div />
          <div />
        </aside>

        <article className="issues">
          <div />
          <div />
          <div />
        </article>
      </Profile>
    </Container>
  );
};

export default LoadPlaceholder;
