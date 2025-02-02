import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";



const CardVehicle = ({vehicleUrl,uid}) => {

    //Declaro un useState para guardar los atributos de cada VEHICULO que viene de data
    const [infoVehicle,setInfoVehicle] = useState({});

    const {actions} = useContext(Context);

    //Creo una funcion para recoger los datos del vehiculo a partir 
    //de la URL que recibo del objeto de la propiedades 
    const getInfoVehicle = async () => {

        try {
         
            const response = await fetch(`${vehicleUrl}`);

            // console.log("Esto es el response de getInfoVehicle");
            
            // console.log(response);
            
            const data = await response.json();

            //  console.log("Esto es el data de getInfoVehicle");
            
            //  console.log(data.result.properties);

            setInfoVehicle(data.result.properties);

            

        } catch (error) {
            
           // alert("ERROR : en el getInfoVehicle");
        }
    }
    

    useEffect(()=>{

        getInfoVehicle();

    //    console.log("Esto es infoVehicle");
       
    //     console.log(infoVehicle);
        

    },[])

    return (

        <>

            <div className="card col-2 p-0 " style={{width: "23rem"}}>
                <div >
                    <img src={`https://starwars-visualguide.com/assets/img/vehicles/${uid}.jpg`} className="card-img-top img-cartas object-fit-cover" alt="..."/>    
                </div>
               
                <div className="card-body d-flex flex-column justify-content-between">
                    <div>

                        <h2>Name : {infoVehicle.name}</h2>
                        <p>Model : {infoVehicle.model}</p>
                        <p>Manufacturer : {infoVehicle.manufacturer}</p>

                    </div>

                    <div className="d-flex justify-content-between">

                        <Link to={"/VistaVehicle"}><button onClick={() => actions.putLearnMoreObject(infoVehicle,`https://starwars-visualguide.com/assets/img/vehicles/${uid}.jpg`)} type="button" className="btn btn-outline-primary" >Learn More !</button></Link>
                        <button type="button" className="btn btn-outline-warning" onClick={() => actions.addFavorites(infoVehicle.name)}><span><i className="fa-solid fa-heart"></i></span></button>

                    </div>
                </div>
            </div>
        
        </>

    )
}


export default CardVehicle;