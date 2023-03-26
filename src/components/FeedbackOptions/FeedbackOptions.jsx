import sass from './FeedbackOptions.module.scss';

export const FeedbackOptions = ({ state, onLeaveFeedback }) => (
  <div className={sass.buttonWrapper}>
    {Object.keys(state).map(el => (
      <button key={el} onClick={onLeaveFeedback} name={el} className={sass.btn}>
        {el}
      </button>
    ))}
  </div>
);
