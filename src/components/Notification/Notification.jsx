import sass from './Notification.module.scss';

export const Notification = ({ message }) => (
  <p className={sass.notification}>{message}</p>
);
