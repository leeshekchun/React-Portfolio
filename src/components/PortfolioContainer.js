import React, { useState } from 'react';
import NavTabs from './NavTab';
import Header from './Header/index';
import About from './About/index';
import Experience from './Experience/index';
import Projects from './Projects/index';
import Contact from './Contact/index';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Header');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Header') {
      return <Header />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Experience') {
      return <Experience />;
    }
    if (currentPage === 'Projects') {
        return <Projects />;
      }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}