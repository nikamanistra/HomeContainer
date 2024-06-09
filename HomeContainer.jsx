import React from 'react';
import { Footer } from '../Footer/Footer';
import classes from './HomeContainer.module.css';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

const HomeContainer = ({
  headerText,
  children,
  className,
  breadComponent,
  withoutBread,
  withoutFooter,
  isFixedBrand
}) => {
  return (
    <>
      <div
        className={`${
          withoutBread ? classes.homeClearContainer : classes.homeContainer
        } ${className ? className : ''}`}
      >
        {!withoutBread && (
          <Breadcrumbs
            breadComponent={breadComponent}
            headerText={headerText}
            isFixed={isFixedBrand}
          />
        )}
        {children}
      </div>
      {!withoutFooter && <Footer />}
    </>
  );
};

export default HomeContainer;
