	import React, {useState} from "react";


	//create your first component
	const Home = () => {

		// Creamos los estados, 1 para las tareas que escribamos y el otro para el array donde iran las tareas que escribamos.
		const[newtask, setNewTask]=useState("");
		const[taskList, setTaskList]=useState([]);

		// Función para añadir las tareas al array taskList una vez presionado Enter. Después limpiamos el setNewTask para que se puedan poner mas cosas.
		function addTask () {
			setTaskList([...taskList, newtask]);
			setNewTask("");
		}
		
		return (
			<div className="text-center p-5 m-5">
				<form>
				<h1 className="text-center mt-5">To Do List</h1>
				<div className="form-group">
					{/* Evento onChange con función flecha para cambiar por el valor de newtask */}
					{/* Evento keyDown para al presionar la tecla enter, se ejecute la función de añadir la task al array. Se usa el default porque si no por defecto no lo hace */}
					{/* IMPORTANTE, en operador ternario siempre tiene que haber un else, sino dará error */}
					<input type="" className="form-control" id="task" aria-describedby="taskAdded" placeholder="What needs to be done?" onChange={(event)=> setNewTask(event.target.value)} onKeyDown={(event)=> event.key === "Enter" ? (addTask(), event.preventDefault()) : null}/>
				</div>

				{/* Creada una UL para que por cada task del array, me cree un imput ordenado */}
				<ul>
					{taskList.map((newTask, index) => (
					<input className="form-control m-0" key={index} value={newTask}/>
					))}
				</ul>
				</form>
				{/* Para que vaya contando las tareas pendientes se usa .length para que se vaya actualizando con los datos que haya en el array */}
				<p className="text-start">{taskList.length} Items Left </p>
			</div>
		);
	};
	export default Home;
