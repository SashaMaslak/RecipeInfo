import { HiOutlineChartBar, HiOutlineChartPie } from 'react-icons/hi';
import { BsAlarm } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { CardWrapper, IngoContainer } from './Recipe.styled';
import { RecipeInfo } from '../RecipeInfo/RecipeInfo';

export const Recipe = ({
  recipe: { name, time, servings, calories, image },
}) => {
  return (
    <CardWrapper>
      <h2>{name}</h2>
      <IngoContainer>
        <RecipeInfo text={`${time} min`} icon={BsAlarm} />
        <RecipeInfo text={`${servings} servings`} icon={HiOutlineChartPie} />
        <RecipeInfo text={`${calories} calories`} icon={HiOutlineChartBar} />
      </IngoContainer>
    </CardWrapper>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.exact({
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
