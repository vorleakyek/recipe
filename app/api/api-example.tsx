// export default async function Page() {
//   const url = 'https://food-recipes-with-images.p.rapidapi.com/?q=chicken%20soup';
//   const options = {
//     method: 'GET',
//     headers: {
//       'x-rapidapi-key': '55bcc4d407msh7cbe5beefba097fp19fdbbjsn007b09f7adac',
//       'x-rapidapi-host': 'food-recipes-with-images.p.rapidapi.com'
//     }
//   };

//   let result;

//   try {
//     const response = await fetch(url, options);
//     result = await response.json();
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
//   return <h1>{ result.d[0].Title } </h1>
// }
