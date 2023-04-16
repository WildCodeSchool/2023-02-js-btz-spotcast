import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const RateButton = ({ count, rating, color, onRating }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const getColor = (index) => {
    if (hoverRating >= index) {
      return color.filled;
    } else if (rating >= index) {
      return color.filled;
    }
    return color.unfilled;
  };

  const handleClick = (index) => {
    const newRating = rating === index ? 0 : index; // toggle rating if already selected
    onRating(newRating);
  };

  const starRating = useMemo(() => {
    return Array(count)
      .fill(0)
      .map((_, i) => i + 1)
      .map((idx) => (
        <FontAwesomeIcon
          key={idx}
          className="cursor-pointer"
          icon={rating >= idx ? faStar : faStar}
          onClick={() => handleClick(idx)}
          style={{ color: getColor(idx), cursor: 'pointer' }}
          onMouseEnter={() => setHoverRating(idx)}
          onMouseLeave={() => setHoverRating(0)}
        />
      ));
  }, [count, rating, hoverRating]);

  return <div>{starRating}</div>;
};

RateButton.propTypes = {
  count: PropTypes.number,
  rating: PropTypes.number,
  onChange: PropTypes.func,
  color: {
    filled: PropTypes.string,
    unfilled: PropTypes.string,
  },
};

RateButton.defaultProps = {
  count: 1,
  rating: 0,
  color: {
    filled: '#4C6863',
    unfilled: '#F0F4F1',
  },
};
export default RateButton;
