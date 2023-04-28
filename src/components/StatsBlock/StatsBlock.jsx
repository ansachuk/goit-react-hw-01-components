import PropTypes from 'prop-types';
import css from './StatsBlock.module.css';

const StatsBlock = ({ statsLabel, quantity }) => {
  return (
    <li className={css.statsItem}>
      <span className={css.label}>{statsLabel}</span>
      <span className={css.quantity}>{quantity}</span>
    </li>
  );
};

StatsBlock.propTypes = {
  statsLabel: PropTypes.string,
  quantity: PropTypes.number,
};

export default StatsBlock;
