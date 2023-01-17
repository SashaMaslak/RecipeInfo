import { Box } from '../Box';
import PropTypes from 'prop-types';
import { Badge } from './RecipeDifficalty.styled';

export const RecipeDifficalty = ({ difficalty }) => {
  return (
    <Box p={3}>
      <h3>Difficalty</h3>
      <Box
        p={2}
        display="inline-flex"
        alignItems="center"
        gridGap={4}
        // border="2px solid #44bd44"
        // borderRadius="10px"
      >
        <Badge selected={difficalty === 0}>Easy</Badge>
        <Badge selected={difficalty === 1}>Medium</Badge>
        <Badge selected={difficalty === 2}>Hard</Badge>
      </Box>
    </Box>
  );
};

RecipeDifficalty.propTypes = {
  difficalty: PropTypes.oneOf([0, 1, 2]).isRequired,
};
