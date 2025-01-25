import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './components/AppRoutes';

const App = () => {

  return (
    <div className="container mx-auto p-4">
      <Header />
      <div style={{ flex: 1,minHeight: '100vh'}}>
          <AppRoutes />
        </div>

      <Footer />
    </div>
  );
};

export default App;
