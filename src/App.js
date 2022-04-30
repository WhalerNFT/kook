import React from 'react';
import { createI18n, I18nProvider } from 'react-simple-i18n';
import './app.scss';
import Distribution from './components/distribution';
import Footer from './components/footer';
import Main from './components/main';
import Nav from './components/nav';
import Roadmap from './components/roadmap';
import Team from './components/team';
import WhoIsKook from './components/who-is-kook';
import langData from './constants/lang-data';

function App() {
  return (
    <I18nProvider i18n={createI18n(langData, { lang: 'en_US' })}>
      <Nav />
      <Main />
      <WhoIsKook />
      <Distribution />
      <Roadmap />
      <Team />
      <Footer />
    </I18nProvider>
  );
}

export default App;
