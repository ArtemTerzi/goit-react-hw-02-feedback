import { Fragment } from 'react';

export const Section = ({ title, children }) => (
  <Fragment>
    <h2>{title}</h2>
    {children}
    {/* {countTotalFeedback() === 0 && children} */}
  </Fragment>
);
