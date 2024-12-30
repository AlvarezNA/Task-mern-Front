import React, { useContext, useState } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const NuevoProyecto = () => {

    // Obtener el state del formulario
    const proyectosContext = useContext(proyectoContext);
    const {
        formulario,
        mostrarFormulario,
        agregarProyecto,
        mostrarError,
        errorFormulario
    } = proyectosContext;

    const [proyecto, guardarProyecto] = useState({
        nombre: ''
    });

    const onChangeProyecto = event => {
        guardarProyecto({
            ...proyecto,
            [event.target.name]: event.target.value
        });
    };

    const onSubmitProyecto = event => {
        event.preventDefault();
        // Validar el proyecto
        if (proyecto.nombre === '') {
            mostrarError();
            return;
        }

        // Agregar al state
        agregarProyecto(proyecto);

        // Reiniciar el form
        guardarProyecto({
            nombre: ''
        });
    };

    return (
        <>
            <button
                type='button'
                className='btn btn-block btn-primario'
                onClick={() => mostrarFormulario()}
            >Nuevo Proyecto</button>

            {
                formulario ?
                    (
                        <form
                            className='formulario-nuevo-proyecto'
                            onSubmit={onSubmitProyecto}
                        >
                            <input
                                type='text'
                                className='input-text'
                                placeholder='Nombre Proyecto'
                                name='nombre'
                                value={proyecto.nombre}
                                onChange={onChangeProyecto}
                            />

                            <input
                                type='submit'
                                className='btn btn-primario btn-block'
                                value='Agregar Proyecto'
                            />
                        </form>
                    ) : null
            }
            {
                errorFormulario
                    ? <p className='mensaje error'>El nombre del Proyecto es obligatorio</p>
                    : null
            }
        </>
    );
}

export default NuevoProyecto;