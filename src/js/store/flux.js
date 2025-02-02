import { object } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			people:[],
			planets:[],
			vehicles:[],
			learnMoreObject:[],
			urlImg:[],
			favorites:[]
			
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			//Declaro la funcion para recoger los datos de la SWAPI
			getDataPeople: async () => {

				try {

					const response = await  fetch("https://www.swapi.tech/api/people/");

					 

					const data = await response.json();
					
					// // console.log(data.results);
					// console.log(data);

					

					if (response.ok) {
						
						setStore({people: data.results});

						// console.log("Esto es el Store");
						
						 console.log(getStore().people);
						
					}
					
				} catch (error) {
					
					//alert('ERROR : problemas con el getDataPeople');
				}
			},
			//Declaro la funcion para recoger los datos de los PLANETAS de la SWAPI
			getDataPlanets: async () => {

				try {

					const response = await fetch("https://www.swapi.tech/api/planets/");

					// console.log("Esto es lo que hay en el response de PLANETS");
					// console.log(response);
					
					const data = await response.json();

					// console.log("Esto es lo que hay en el data de PLANETS");
					// console.log(data);

					// console.log("Esto es lo que hay en data.results");
					
					// console.log(data.results);

					setStore({planets: data.results});

					// console.log("Esto es lo que hay en store.planets");
					// console.log(getStore().planets);
					
				} catch (error) {
					
					//alert('ERROR : problemas con el getDataPlanets');
				}

			},
			//Declaro una funcion para recoger los datos de los VEHICULOs de la API
			getDataVehicles:  async () => {

				try {

					const response = await fetch("https://www.swapi.tech/api/vehicles/");

					const data = await response.json();

					// console.log("Esto es la respuesta de data getDataVehicles");
					
					// console.log(data);

					setStore({vehicles: data.results});

					// console.log(getStore().vehicles);
					
					
				} catch (error) {
					
					//alert('ERROR : problemas con el getDataVehicles');
				}
			},
			putLearnMoreObject: (object,url) => {

				
				setStore({learnMoreObject: object});

				setStore({urlImg: url});
			},
			addFavorites:(favoriteName) =>{

				let auxFavorite = getStore().favorites;

					auxFavorite.push(favoriteName);

				let filtredList = [...new Set(auxFavorite)];

				setStore({favorites: filtredList});

			},
			deleteFavorites:(favoriteName)=>{

				let auxFavorite = getStore().favorites;

				//Declaro un nuevo array para guardar un array con lso nuevos elementos
				let favoritesDelete = auxFavorite.filter((oneFavorite)=>oneFavorite !== favoriteName);

				setStore({favorites: favoritesDelete});
			}
		}
	};
};

export default getState;
