import { Fragment } from 'react';
import sass from './Statistics.module.scss';

export const Statistics = ({ state, total, positivePercentage, title }) => (
  <Fragment>
    <h3> {title}</h3>
    {Object.keys(state).map(el => (
      <p key={el} name={el} className={sass.statistics__item}>
        {el}: {state[el]}
      </p>
    ))}
    <p className={sass.statistics__item}>Total: {total()}</p>
    <p className={sass.statistics__item}>
      Positive feedback: {positivePercentage()}%
    </p>
  </Fragment>
);
