import React from 'react';

import GlobalStyles from './styles/GlobalStyles';
import Section from './components/Section';
import SideMenu from './components/SideMenu';
import MenuForm from './components/MenuForm';

import data from './data/index';

function App() {
  return (
    <>
      <Section
        variant="blue"
        title={data[0].title}
        description={data[0].description}
        image={data[0].image}
      />

      <Section
        variant="beige"
        title={data[1].title}
        description={data[1].description}
        image={data[1].image}
      />

      <Section
        variant="blue"
        title={data[2].title}
        description={data[2].description}
        image={data[2].image}
      />

      <Section
        variant="white"
        title={data[3].title}
        description={data[3].description}
        image={data[3].image}
      />

      <Section
        variant="black"
        title={data[4].title}
        description={data[4].description}
        image={data[4].image}
      />

      <SideMenu>
        <MenuForm />
      </SideMenu>

      <GlobalStyles />
    </>
  );
}

export default App;
