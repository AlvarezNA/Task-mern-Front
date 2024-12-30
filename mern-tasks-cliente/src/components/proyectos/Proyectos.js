import React, { useContext, useEffect } from "react";
import SideBar from "../layout/SideBar";
import Barra from "../layout/Barra";
import FormTarea from "../tareas/FormTarea";
import ListadoTarea from "../tareas/ListadoTarea";
import AuthContext from "../../context/autenticacion/authContext";

const Proyectos = () => {

    // Extraer la informacion de autenticacion
    const authContext = useContext(AuthContext);
    const { usuarioAutenticado } = authContext;

    useEffect(() => {
        usuarioAutenticado();
        // eslint-disable-next-line
    }, []);

    return (
        <div className='contenedor-app'>
            <SideBar />
            <div className='seccion-principal'>
                <Barra />
                <main>
                    <FormTarea />
                    <div className='contenedor-tareas'>
                        <ListadoTarea />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Proyectos;