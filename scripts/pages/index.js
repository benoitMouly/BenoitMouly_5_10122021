
// async function getPhotographers() {
//         // Penser à remplacer par les données récupérées dans le json
//         // const photographers = [
//         //     {
//         //         "name": "Ma data test",
//         //         "id": 1,
//         //         "city": "Paris",
//         //         "country": "France",
//         //         "tagline": "Ceci est ma data test",
//         //         "price": 400,
//         //         "portrait": "account.png"
//         //     },
//         //     {
//         //         "name": "Autre data test",
//         //         "id": 2,
//         //         "city": "Londres",
//         //         "country": "UK",
//         //         "tagline": "Ceci est ma data test 2",
//         //         "price": 500,
//         //         "portrait": "account.png"
//         //     },
//         // ]
//         let data = await fetch("../data/photographers.json", {
//             method: 'GET',
//             dataType: 'JSON', 
//             headers: {
//               'Content-Type': 'text/json',
              
//             }
//           })
//         .then((response) => response.json())
//         .then(data => {
//             JSON.stringify(data);
//             return data
//         })
//         .catch(error => {
//             console.error(error);
//         });

//         console.log(data)

//         // et bien retourner le tableau photographers seulement une fois
//         return ({
//             // photographers: [...photographers, ...photographers, ...photographers]})
//             photographers: [...data.photographers]})
//     }

//     async function displayData(photographers) {
//         const photographersSection = document.querySelector(".photographer_section");

//         photographers.forEach((photographer) => {
//             const photographerModel = photographerFactory(photographer);
//             const userCardDOM = photographerModel.getUserCardDOM();
//             photographersSection.appendChild(userCardDOM);
//         });
//     };

//     async function init() {
//         // Récupère les datas des photographes
//         const { photographers } = await getPhotographers();
//         displayData(photographers);
//     };
    
//     init();
    