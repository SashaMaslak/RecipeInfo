import { InfoWrapper } from './RecipeInfo.styled';
import PropTypes from 'prop-types';

export const RecipeInfo = ({ icon: Icon, text }) => {
  return (
    <InfoWrapper>
      <Icon size={36} />
      {text}
    </InfoWrapper>
  );
};

RecipeInfo.propTypes = {
  icon: PropTypes.elementType.isRequired,
  text: PropTypes.string.isRequired,
};
