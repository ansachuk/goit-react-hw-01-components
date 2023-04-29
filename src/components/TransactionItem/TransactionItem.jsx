import css from './TransactionItem.module.css';
import PropTypes from 'prop-types';

const TransactionItem = ({ item }) => {
  const { id, type, amount, currency } = item;
  return (
    <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

TransactionItem.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};

export default TransactionItem;
