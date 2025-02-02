import React, { useContext } from "react";
import "../../styles/home.css";
import CardPeople from "../component/CardPeople.jsx";
import { Context } from "../store/appContext";
import CardPLanet from "../component/CardPlanet.jsx";
import CardVehicle from "../component/CardVehicle.jsx";


export const Home = () => {

	const {store} = useContext(Context);



	return(
		<>
		
		<main className="starWarsBlog">
			
			<h1 className="m-3 text-danger">Characters</h1>
			<section className="starWarsPeople col-12 ">
				

				{
					store.people.map((personaje,index)=>{
						
						
						return(

							<CardPeople personUrl = {personaje.url} uid={personaje.uid} index={index}></CardPeople>
						)
					})

				}

			</section>
			
			<h1 className="m-3 text-danger">Planets</h1>
			<section className="starWarsPlanets col-12 mt-3">

				{
					store.planets.map((planeta,index)=>{

						return(

							<CardPLanet planetUrl = {planeta.url} uid ={planeta.uid} index={index}/>

						)
					})


				}

			</section>

			<h1 className="m-3 text-danger">Vehicles</h1>
			<section className="starWarsVehicles row mt-3 flex-nowrap">

				{
					store.vehicles.map((vehiculo,index)=>{

						return(

							<CardVehicle vehicleUrl = {vehiculo.url} uid={vehiculo.uid} index={index}></CardVehicle>
						)

					})

				}

			</section>

		</main>
			
			
		
		
		</>
	)
}



	
;
