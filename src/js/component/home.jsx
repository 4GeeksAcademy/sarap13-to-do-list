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
			<div className="text-center p-3 m-5" >
				<h3 className="text-center p-4 fs-1" style={{color: "indianRed"}}>Todos</h3>
				<div className="container">
				<form>
				<div className="form-group">
					{/* Evento onChange con función flecha para cambiar por el valor de newtask */}
					{/* Evento keyDown para al presionar la tecla enter, se ejecute la función de añadir la task al array. Se usa el default porque si no por defecto no lo hace */}
					{/* IMPORTANTE, en operador ternario siempre tiene que haber un else, sino dará error */}
					<input type="" className="form-control p-3 rounded-0 no-outline" id="task" aria-describedby="taskAdded" placeholder="What needs to be done?" onChange={(event)=> setNewTask(event.target.value)} onKeyDown={(event)=> event.key === "Enter" ? (addTask(), event.preventDefault()) : null}/>
					{taskList.map((newTask, index) => (
					<input className="form-control m-0 p-3 rounded-0" key={index} value={newTask}/>
					))}

				</div>

				{/* Creada una UL para que por cada task del array, me cree un imput ordenado */}
				</form>
				{/* Para que vaya contando las tareas pendientes se usa .length para que se vaya actualizando con los datos que haya en el array */}
				<p className="text-start mt-3 border-top p-2">{taskList.length} Items Left </p>


				</div>
			</div>
		);
	};
	export default Home;
