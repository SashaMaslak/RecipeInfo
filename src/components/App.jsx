import { Recipe } from './Recipe/Recipe';
import recipes from '../recepies.json';

export const App = () => {
  return (
    <div>
      {recipes.map((recipe, idx) => (
        <Recipe key={idx} recipe={recipe} />
      ))}
    </div>
  );
};
