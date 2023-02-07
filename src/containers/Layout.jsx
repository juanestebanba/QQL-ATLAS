import React from'react';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      {children}
      <Footer />
    </div>
  );
}

export default Layout;