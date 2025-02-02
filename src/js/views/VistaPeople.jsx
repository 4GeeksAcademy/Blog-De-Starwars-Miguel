import React from "react";
import { Context } from "../store/appContext";
import { useContext } from "react";


const VistaPeople = () => {


     const {store} = useContext(Context);

    return(

        <>
              {/* <h1>Hola esta es la vista de personaje : {store.learnMoreObject.name}</h1>
             <img src={store.urlImg} alt="" />  */}
            <div className="container">


                <div className="card col-md-12 border-0 " >
                    <div className="row">
                        <div className="col-md-6">
                            <img src={store.urlImg} className="img-fluid rounded" alt="Imagen de personaje"/>
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h1 className="card-title">{store.learnMoreObject.name}</h1>
                                <p className="card-text text-center">
                                    Es un periodo de guerras civiles en la galaxia. Una valiente alianza de luchadores por la libertad clandestinos ha desafiado la tiranía y opresión del impresionante IMPERIO GALÁCTICO.
                                    Atacando desde una fortaleza oculta entre los mil millones de estrellas de la galaxia, las naves espaciales rebeldes han logrado su primera victoria en una batalla contra la poderosa Flota Estelar Imperial.
                                     El IMPERIO teme que otra derrota pueda llevar a mil sistemas solares más a unirse a la rebelión, y el control Imperial sobre la galaxia se perdería para siempre.
                                    Para aplastar la rebelión de una vez por todas, el IMPERIO está construyendo una siniestra nueva estación de combate. Lo suficientemente poderosa como para destruir un planeta entero, 
                                    su finalización significa la perdición segura para los campeones de la libertad.
                                </p>
                                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                    <hr className="border border-danger border-2 opacity-50"/>
                    <div className="d-flex flex-column flex-md-row justify-content-center">
                        <div className="m-3 col-md-auto">
                            <span className="text-danger"><b>Name</b></span>   
                            <p className="text-danger">{store.learnMoreObject.name}</p>
                        </div>
                         
                        <div className="m-3 col-md-auto">
                            <span className="text-danger"><b>Birth Year</b></span>   
                            <p className="text-danger">{store.learnMoreObject.birth_year}</p>
                        </div>

                        <div className="m-3 col-md-auto">
                            <span className="text-danger"><b>Gender</b></span>   
                            <p className="text-danger">{store.learnMoreObject.gender}</p>
                        </div>

                        <div className="m-3 col-md-auto">
                            <span className="text-danger"><b>Height</b></span>   
                            <p className="text-danger">{store.learnMoreObject.height}</p>
                        </div>

                        <div className="m-3 col-md-auto">
                            <span className="text-danger"><b>Skin Color</b></span>   
                            <p className="text-danger">{store.learnMoreObject.skin_color}</p>
                        </div>

                        <div className="m-3 col-md-auto">
                            <span className="text-danger"><b>Eye Color</b></span>   
                            <p className="text-danger">{store.learnMoreObject.eye_color}</p>
                        </div>
                    </div>
                </div>



            </div>
        </>
        
    )

}




export default VistaPeople;