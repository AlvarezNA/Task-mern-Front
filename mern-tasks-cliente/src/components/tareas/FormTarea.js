import React, { useContext, useState, useEffect } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const FormTarea = () => {

    // Extraer si un proyecto está activo
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    const tareasContext = useContext(tareaContext);
    const {
        tareaSeleccionada,
        agregarTarea,
        validarTarea,
        errorTarea,
        obtenerTareas,
        actualizarTarea,
        limpiarTarea
    } = tareasContext;

    useEffect(() => {
        if (tareaSeleccionada !== null) {
            guardarTarea(tareaSeleccionada);
        } else {
            guardarTarea({
                nombre: ''
            })
        }
    }, [tareaSeleccionada]);

    // State del formulario
    const [tarea, guardarTarea] = useState({
        nombre: ''
    })

    //Extraer nombre de proyecto
    const { nombre } = tarea;

    // Si no hay proyecto seleccionado
    if (!proyecto) return null;

    // Array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    // leer los valores del formulario
    const handleChange = e => {
        guardarTarea({
            ...tarea,
            [e.target.name]: e.target.value
        })
    }
    const onSubmit = e => {
        e.preventDefault();
        // Validar
        if (nombre.trim() === '') {
            validarTarea();
            return;
        }

        // Si es edicion o si es nueva tarea
        if (tareaSeleccionada === null) {
            // agregar nueva tarea al state de tareas
            tarea.proyecto = proyectoActual._id;
            agregarTarea(tarea);
        } else {
            // actualizar tarea existente
            actualizarTarea(tarea);
            // Elimina tarea seleccionada del State
            limpiarTarea();
        }
        // Obtener y filtrar las tareas del proyecto actual
        obtenerTareas(proyectoActual.id);

        // reiniciar form
        guardarTarea({ nombre: '' });
    }

    return (
        <div className='formulario'>
            <form
                onSubmit={onSubmit}
            >
                <div className='contenedor-input'>
                    <input
                        type='text'
                        className='input-text'
                        placeholder='Nombre Tarea'
                        name='nombre'
                        value={nombre}
                        onChange={handleChange}
                    ></input>
                </div>

                <div className='contenedor-input'>
                    <input
                        type='submit'
                        className='btn btn-primario btn-block btn-submit'
                        value={tareaSeleccionada ? 'Editar tarea' : 'Agregar Tarea'}
                    ></input>
                </div>
            </form>
            {errorTarea ? <p className='mensaje error'>El nombre de la tarea es obligatorio</p> : null}
        </div>
    )
}

export default FormTarea
