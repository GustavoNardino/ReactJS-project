import React from 'react';
import Button from './components/Button';
import Footer from './components/Footer';
import Header from './components/Header';
import Input from './components/Input';
import Title from './components/Title';
import './components/styles.css'

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Title />
      <Input />
      <Button />
      <Footer />
    </div>
  );
}

export default App;