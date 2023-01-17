import { HiOutlineChartBar, HiOutlineChartPie } from 'react-icons/hi';
import { BsAlarm } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { RecipeInfo } from '../RecipeInfo/RecipeInfo';
import { IngoContainer, RecipeName } from './Recipe.styled';
import { Box } from 'components/Box';
import { RecipeDifficalty } from 'components/RecipeDifficalty/RecipeDifficalty';

export const Recipe = ({
  recipe: { name, time, servings, calories, difficalty, image },
}) => {
  return (
    <Box p={4}>
      <RecipeName>{name}</RecipeName>
      <IngoContainer>
        <RecipeInfo text={`${time} min`} icon={BsAlarm} />
        <RecipeInfo text={`${servings} servings`} icon={HiOutlineChartPie} />
        <RecipeInfo text={`${calories} calories`} icon={HiOutlineChartBar} />
      </IngoContainer>
      <RecipeDifficalty difficalty={difficalty} />
    </Box>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.exact({
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    difficalty: PropTypes.oneOf([0, 1, 2]).isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
