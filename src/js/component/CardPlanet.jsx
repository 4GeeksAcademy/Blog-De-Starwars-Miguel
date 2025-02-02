import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";



const CardPLanet = ({planetUrl,uid}) => {

    const [dataPlanet,setPlanet] = useState({});

    const {actions} = useContext(Context);

    //Declaro una funcion con la cual vamos a sacar los datos de cada planeta
    const getInfoPlanet = async () => {


        try {
            
            const response = await fetch(`${planetUrl}`);

            // console.log("Esto es el response del getInfoPlanet");
            // console.log(response);
            
            const data = await response.json();

            // console.log("Esto es el data del getInfoPlanet");
            // console.log(data);

            setPlanet(data.result.properties);
            

        } catch (error) {
            
            
        }


    } 

    

    useEffect(()=>{


        getInfoPlanet();



    },[]);


    return(

        <>
            <div className="card col-2 " style={{width: "23rem"}}>
                <div>
                    <img  src={parseInt(uid) !== 1 ?  `https://starwars-visualguide.com/assets/img/planets/${uid}.jpg` : "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357"} className="card-img-top" alt="..."/>
                </div>
                
                <div className="card-body d-flex flex-column justify-content-between">
                    <div>

                        <h2><b>Name :</b> {dataPlanet.name}</h2>
                        <p>Population : {dataPlanet.population}</p>
                        <p>Terrain : {dataPlanet.terrain}</p>

                    </div>

                    <div className="d-flex justify-content-between">

                        <Link to={"/VistaPlanet"}><button type="button" onClick={() => actions.putLearnMoreObject(dataPlanet,parseInt(uid) !== 1 ?  `https://starwars-visualguide.com/assets/img/planets/${uid}.jpg` : "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357")} className="btn btn-outline-primary" >Learn More !</button></Link>
                        <button type="button" className="btn btn-outline-warning" onClick={()=>actions.addFavorites(dataPlanet.name)}><span><i className="fa-solid fa-heart"></i></span></button>

                    </div>
                </div>
            </div>
        </>

    )
} 

export default CardPLanet;