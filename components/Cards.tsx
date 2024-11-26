import Card from "./Card"
interface recipeProps {
  id: number;
  Title: string;
  Ingredients: {[key: string]: string | undefined;};
  Instructions: string;
  Image: string;
}

interface CardsProps {
  recipes: recipeProps[]; // Accepts an array of recipes as the `recipes` property
}

const Cards = ({ recipes }: CardsProps) => {
  return (
    <div className="flex flex-wrap mt-3">
      {recipes.map((recipe) =>
        <Card
          key={recipe.id}
          src={`https:${recipe.Image}`}
          title={recipe.Title}
          rating={1.3}
          totalRating={800}
        />
      )}
    </div>
  );
};

export default Cards;
