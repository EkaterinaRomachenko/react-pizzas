import PropTypes from "prop-types";

export const IngredientPropType = PropTypes.shape({
  id: PropTypes.string,
  title: PropTypes.string,
  types: PropTypes.object,
  sizes: PropTypes.object,
  price: PropTypes.number,
  imageUrl: PropTypes.string,
  category: PropTypes.number,
  rating: PropTypes.number,
});
