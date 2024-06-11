// import logo from './logo.svg';
import './App.css';
import { Fragment, useEffect } from 'react';
import { Navbar } from './components/navbar';
import { Main } from './components/main';

import WOW from 'wowjs';
import { Footer } from './components/footer';
import { Contact } from './components/contact';

function App() {
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  })

  return (
    <Fragment>
      <Navbar />
      <Main />
      <Contact />
      <Footer />
    </Fragment>
  )
}

export default App;
