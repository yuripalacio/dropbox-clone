import React from 'react';

import {
  Container,
  Content,
  HeaderWrapper,
  Header,
  DropboxLogo,
} from './styles';

interface Props {
  variant: 'blue' | 'beige' | 'white' | 'black';
  title: string;
  description: string;
  image: string;
}

const Section: React.FC<Props> = ({ variant, title, description, image }) => {
  function handleToggle() {
    if (window.toggleActiveMenu) window.toggleActiveMenu();
  }

  return (
    <Container className={variant}>
      <HeaderWrapper>
        <Header>
          <h1>
            <DropboxLogo />
            <span>Dropbox</span>
          </h1>

          <div>
            <button onClick={handleToggle}>Acessar</button>
            <button onClick={handleToggle}>Registrar</button>
          </div>
        </Header>
      </HeaderWrapper>

      <Content className={image}>
        <div className="image">
          <img
            src="https://cfl.dropboxstatic.com/static/images/index/zeus/home-hero-vflMv-jgR.jpg"
            alt="dropboxstatic"
          />
        </div>
        <div className="content">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </Content>
    </Container>
  );
};

export default Section;
