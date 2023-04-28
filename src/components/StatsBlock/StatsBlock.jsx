import PropTypes from 'prop-types';
import css from './StatsBlock.module.css';

const StatsBlock = ({ statsLabel, quantity }) => {
  return (
    <>
      <span className={css.label}>{statsLabel}</span>
      <span className={css.quantity}>{quantity}</span>
    </>
  );
};

StatsBlock.propTypes = {
  statsLabel: PropTypes.string,
  quantity: PropTypes.string,
};

export default StatsBlock;
