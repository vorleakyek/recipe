import Cards from "@/components/Cards";
import Link from "next/link";

export default function Home() {

  const sampleData = [{ "id": 654, "Title": "Grilled Shrimp with Turmeric Mojo Sauce", "Ingredients": { "1": "6 garlic cloves, smashed", "2": "2 habanero chiles, seeds removed, chopped", "3": "1 (3\") piece ginger, peeled, thinly sliced", "4": "1\/3 cup fresh lime juice", "5": "1\/3 cup fresh orange juice", "6": "1 Tbsp. sugar", "7": "2 tsp. unseasoned rice vinegar", "8": "1\/2 tsp. ground turmeric", "9": "1\/3 cup vegetable oil, plus more for grill", "10": "Kosher salt", "11": "1 1\/2 lb. large shrimp, peeled, deveined", "12": "Cooked short-grain white rice (for serving; optional)", "13": "Flaky sea salt" }, "Instructions": "Prepare a grill for medium-high heat. Pulse garlic, chiles, ginger, lime juice, orange juice, sugar, vinegar, and turmeric in a food processor until combined and almost smooth. With the motor running, gradually stream in 1\/3 cup oil and process until emulsified.\nPour half of the sauce into a small bowl; season with kosher salt. Set aside for serving. Transfer remaining sauce to a medium bowl and add shrimp. Season with kosher salt and toss to coat.\nClean and oil grate, then immediately arrange shrimp on grill. Grill until bright pink and lightly charred, about 1 minute per side. Divide shrimp among bowls. Spoon reserved sauce over; sprinkle with sea salt. Serve with rice if desired.", "Image": "\/\/20fix.com\/xfood\/img\/grilled-shrimp-with-turmeric-mojo-sauce.jpg" },
  { "id": 1828, "Title": "Grilled Shrimp and Corn Salad", "Ingredients": { "1": "1 pound large peeled, deveined shrimp", "2": "1 ounce tequila", "3": "Juice of 2 limes", "4": "3 ears of corn, husks removed", "5": "2 heads romaine lettuce, chopped", "6": "1\/2 cup black beans, drained and rinsed", "7": "1\/2 cup cherry tomatoes, halved", "8": "1 avocado, sliced", "9": "1\/4 cup your favorite salad dressing", "10": "Chopped fresh cilantro, for garnish", "11": "Sliced lime, for garnish", "12": "Tortilla chips (optional)" }, "Instructions": "Thread the shrimp on skewers and place in a baking dish. Coat with tequila and lime juice and marinate 15 minutes. Oil and preheat a grill or grill pan to medium-high heat. Brush the corn with olive oil and sprinkle with salt and pepper. Place the shrimp and corn on the grill and grill about 3 minutes per side until cooked through. Cool slightly. Remove the shrimp from skewers and slice the kernels off the cobs.\nIn a large bowl, toss the lettuce with the beans, tomatoes, avocado, and dressing. Arrange grilled shrimp and corn on top and garnish with cilantro and lime. Serve with tortilla chips, if desired.", "Image": "\/\/20fix.com\/xfood\/img\/grilled-shrimp-and-corn-salad.jpg" },{ "id": 6254, "Title": "Grilled Shrimp with Turmeric Mojo Sauce", "Ingredients": { "1": "6 garlic cloves, smashed", "2": "2 habanero chiles, seeds removed, chopped", "3": "1 (3\") piece ginger, peeled, thinly sliced", "4": "1\/3 cup fresh lime juice", "5": "1\/3 cup fresh orange juice", "6": "1 Tbsp. sugar", "7": "2 tsp. unseasoned rice vinegar", "8": "1\/2 tsp. ground turmeric", "9": "1\/3 cup vegetable oil, plus more for grill", "10": "Kosher salt", "11": "1 1\/2 lb. large shrimp, peeled, deveined", "12": "Cooked short-grain white rice (for serving; optional)", "13": "Flaky sea salt" }, "Instructions": "Prepare a grill for medium-high heat. Pulse garlic, chiles, ginger, lime juice, orange juice, sugar, vinegar, and turmeric in a food processor until combined and almost smooth. With the motor running, gradually stream in 1\/3 cup oil and process until emulsified.\nPour half of the sauce into a small bowl; season with kosher salt. Set aside for serving. Transfer remaining sauce to a medium bowl and add shrimp. Season with kosher salt and toss to coat.\nClean and oil grate, then immediately arrange shrimp on grill. Grill until bright pink and lightly charred, about 1 minute per side. Divide shrimp among bowls. Spoon reserved sauce over; sprinkle with sea salt. Serve with rice if desired.", "Image": "\/\/20fix.com\/xfood\/img\/grilled-shrimp-with-turmeric-mojo-sauce.jpg" },
    { "id": 12828, "Title": "Grilled Shrimp and Corn Salad", "Ingredients": { "1": "1 pound large peeled, deveined shrimp", "2": "1 ounce tequila", "3": "Juice of 2 limes", "4": "3 ears of corn, husks removed", "5": "2 heads romaine lettuce, chopped", "6": "1\/2 cup black beans, drained and rinsed", "7": "1\/2 cup cherry tomatoes, halved", "8": "1 avocado, sliced", "9": "1\/4 cup your favorite salad dressing", "10": "Chopped fresh cilantro, for garnish", "11": "Sliced lime, for garnish", "12": "Tortilla chips (optional)" }, "Instructions": "Thread the shrimp on skewers and place in a baking dish. Coat with tequila and lime juice and marinate 15 minutes. Oil and preheat a grill or grill pan to medium-high heat. Brush the corn with olive oil and sprinkle with salt and pepper. Place the shrimp and corn on the grill and grill about 3 minutes per side until cooked through. Cool slightly. Remove the shrimp from skewers and slice the kernels off the cobs.\nIn a large bowl, toss the lettuce with the beans, tomatoes, avocado, and dressing. Arrange grilled shrimp and corn on top and garnish with cilantro and lime. Serve with tortilla chips, if desired.", "Image": "\/\/20fix.com\/xfood\/img\/grilled-shrimp-and-corn-salad.jpg" }]

  return (
    <>
      <section>
        <p className="text-center mt-3 text-lg">Discover new flavors. Share your favorites. <br /> Love every bite.</p>
      </section>

      <section>
        <h2 className="text-center mt-3 text-xl font-bold">RECIPES</h2>
        <Cards recipes={sampleData}/>
      </section>

      <section>
        <h2 className="text-center mt-3 text-xl font-bold">COMMUNITY</h2>
        <p className="text-center">Got a dish you love? Share the favor!</p>
        <div className="flex gap-5 mt-3 align-center">
          <div>
            <Link href="/shareRecipe">
              <button className="share-button">
                Share!
              </button>
            </Link>
          </div>
          <div>
            <p>Click Share to upload you recipe and inspire others to create magic in the kitchen.</p>
          </div>
        </div>
      </section>
    </>
  );
}
