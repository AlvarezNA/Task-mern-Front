import React from "react";
import ListadoProyectos from "../proyectos/ListadoProyecto";
import NuevoProyecto from "../proyectos/NuevoProyecto";

const SideBar = () => {
    return (
        <aside>
            <h1>MERN <span>Tasks</span></h1>

            <NuevoProyecto />

            <div className='proyectos'>
                <h2>Tus Proyectos</h2>
                <ListadoProyectos />
            </div>
        </aside>
    );

}

export default SideBar;