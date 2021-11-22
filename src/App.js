import { Fragment } from 'react';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import './App.css';

const App = () => {
  return (
      <Fragment>
        <Header />
        <Body />
        <Footer />
      </Fragment>
  )
}

export default App;
