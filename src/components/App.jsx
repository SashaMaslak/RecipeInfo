import { useMedia } from 'react-use';
import { GlobalStyle } from './GlobalStyle';
import { Box } from './Box';
import { Recipe } from './Recipe/Recipe';
import recipes from '../recepies.json';

export const App = () => {
  const isDesktop = useMedia('(min-width: 768px)');
  return (
    <>
      <Box
        as="header"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <div>Logo</div>
        {isDesktop ? <div>Desktop nav</div> : <div>Mobile nav</div>}
      </Box>
      <Box>
        {recipes.map((recipe, idx) => (
          <Recipe key={idx} recipe={recipe} />
        ))}
        <GlobalStyle />
      </Box>
    </>
  );
};
