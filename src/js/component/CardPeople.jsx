import React, { useEffect } from "react";
import { useState,useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";



 const CardPeople = ({personUrl , uid}) => {

    const [dataPeople,setDataPeople] = useState({});
  
   const {actions} = useContext(Context);
  
    // console.log(dataPeople.name);
    
    
    
    const getInfoPerson = async () => {

            try {

                const response = await  fetch(`${personUrl}`);

                // console.log(response);

                const data = await response.json();
                
               setDataPeople(data.result.properties); 
                
            } catch (error) {
                
               
            }
        
    }


    
        useEffect(() => {
    
            getInfoPerson();
        
            

        },[])

    return(

        <>

            <div className="card col-2 " style={{width: "23rem"}}>
                <img  src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`} className="card-img-top object-fit-cover" alt="..."/>
                <div className="card-body d-flex flex-column justify-content-between">
                    <div >

                        <h2>Name : {dataPeople.name}</h2>
                        <p><b>Gender :</b> {dataPeople.gender}</p>
                        <p><b>Hair-Color :</b> {dataPeople.hair_color}</p>
                        <p><b>Eye-Color :</b> {dataPeople.eye_color}</p>

                    </div>

                    <div className="d-flex justify-content-between">

                        <Link to={"/VistaPeople"}><button type="button" onClick={() => actions.putLearnMoreObject(dataPeople,`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`)} className="btn btn-outline-primary" >Learn More !</button></Link>
                        <button type="button" className="btn btn-outline-warning" onClick={() => actions.addFavorites(dataPeople.name)}><span><i className="fa-solid fa-heart"></i></span></button>

                    </div>
                </div>
            </div>
        </>

    );

};

export default CardPeople;

 