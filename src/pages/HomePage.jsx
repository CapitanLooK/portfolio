import React, { Fragment } from 'react';
import './homePage.scss';
import { Home } from '../components/home/Home';
import { About } from '../components/about/About';
import { ProjectContainer } from '../containers/projectContainer/ProjectContainer';
import { PracticeContainer } from '../containers/practiceContainer/PracticeContainer';
import { ContactContainer } from '../containers/contactContainer/ContactContainer';

export const HomePage = ()=> {

  return (
    <Fragment>
        <Home />
        <About />
        <ProjectContainer />
        <PracticeContainer />
        <ContactContainer />
    </Fragment>
  );
}
