import React, { useContext } from "react";
import { Link } from "react-router-dom";
import iconoStarWars from "../../img/iconoStarWars.png";
import { Context } from "../store/appContext";



export const Navbar = () => {

	const {store,actions}  = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light d-flex justify-content-around mb-3" style={{marginBottom: "100px"}}>
			<Link to="/">
				<img className="w-25 ms-3" src={iconoStarWars}></img>
			</Link>
			
			<div class="dropdown">
				<a class="btn btn-primary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites {store.favorites.length}
				</a>

				

				<ul class="dropdown-menu ">
					
				{
				store.favorites.length !=0 ?  
					

						store.favorites.map((favorite)=>{
							
							return(

							
								<li><a class="dropdown-item" href="#">{favorite}<i className="fa-solid fa-trash m-3" onClick={()=>actions.deleteFavorites(favorite)}></i></a></li>

							)
							
						})
	
				: <li><a class="dropdown-item" href="#">Empty</a></li>
				}

				</ul>
			</div>
			
		</nav>
	);
};
