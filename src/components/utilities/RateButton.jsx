import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const RateButton = ({ count, rating, color, onRating }) => {

  //------------------------------------------Create a state for the favicon star hovering
  const [hoverRating, setHoverRating] = useState(0);

  //------------------------------------------Create a function that change the color on hovering for the favicon star
  const getColor = (index) => {
    if (hoverRating >= index) {
      return color.filled;
    } else if (rating >= index) {
      return color.filled;
    }
    return color.unfilled;
  };

  //------------------------------------------Create a clickable favicon star
  const handleClick = (index) => {
    const newRating = rating === index ? 0 : index; // toggle rating if already selected
    onRating(newRating);
  };

  //------------------------------------------Create a function that will allows to change the favicon color on the click
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
  rating: PropTypes.bool, // fixed here
  onChange: PropTypes.func,
  color: PropTypes.shape({
    filled: PropTypes.string,
    unfilled: PropTypes.string,
  }),
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
