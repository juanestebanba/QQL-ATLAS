// Read this to undestando context:

// https://beta.reactjs.org/learn/passing-data-deeply-with-context


import { useEffect, useState } from 'react';

const useGetImages = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
		const getImages = async () => {
			try {
				const response = await fetch('src/images.json');
				const data = await response.json();
				setImages(data);
			} catch (error) {
				throw new Error('Failed to fetch images');
			}
		};
		getImages();
  }, []);

  return images;
};

export default useGetImages;




// Codigo inicial --------------------------------------

// import { useEffect, useState } from 'react';
// import '../images.json';

// const useGetImages = () => {
//  const [images, setImages] = useState([]);

//  useEffect(() => {
//    fetch('images.json')
//      .then(response => response.json())
//      .then(json => setImages(json))
//      .catch(error => console.error(error));
//  }, []);

//  return images;
//};

//export default useGetImages;


// --------------------------------------

// Me estoy basando en el código del Yard store dle ejercicio de Platzi, en el hook "useGetProducts":

// https://replit.com/@juanestebanba/yardsalereactapp#src/hooks/useGetProducts.js


//Y en esta respuesta de ChetGPT a la pregunta "how to parse a json file in a react app":

//In React, you can parse a JSON file by making an HTTP request to the server and then processing the response. Here's an example of how you can fetch data from a JSON file and display it in your React component:


// import React, { useState, useEffect } from 'react';

// function MyComponent() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch('data.json')
//       .then(response => response.json())
//       .then(json => setData(json))
//       .catch(error => console.error(error));
//   }, []);

//   return (
//     <ul>
//       {data.map(item => (
//         <li key={item.id}>{item.title}</li>
//       ))}
//     </ul>
//   );
// }