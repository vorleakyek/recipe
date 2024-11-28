import Card from "./Card"
export interface recipeProps {
  id: number;
  title: string;
  ingredients: {[key: string]: string | undefined;};
  instructions: string;
  image: string;
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
            recipe={recipe}
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
