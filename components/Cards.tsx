import Card from "./Card"
interface recipeProps {
  id: number;
  Title: string;
  Ingredients: {[key: string]: string | undefined;};
  Instructions: string;
  Image: string;
}

interface CardsProps {
  recipes: recipeProps[];
}

const Cards = ({ recipes }: CardsProps) => {
  return (
    <>
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
      <div className="flex justify-center">
        <button>Show More</button>
      </div>
    </>


  );
};

export default Cards;
