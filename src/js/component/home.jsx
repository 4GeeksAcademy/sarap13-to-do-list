	import React, {useState} from "react";


	//create your first component
	const Home = () => {

		// Creamos los estados, 1 para las tareas que escribamos y el otro para el array donde iran las tareas que escribamos.
		const[newtask, setNewTask] = useState("");
		const[taskList, setTaskList] = useState([]);
		// Creamos estado para la visibilidad del span X se ponga de visible a no visible
		const[xVisible,setXVisible] = useState("d-none");
		// Creamos el estado para cuando pasemos el mouse por la tarea aparezca la X.
    	const[hoverInTask,setHoverInTask] = useState(null);

		// Función para añadir las tareas al array taskList una vez presionado Enter. Después limpiamos el setNewTask para que se puedan poner mas cosas.
		function addTask () {
			setTaskList([...taskList, newtask]);
			setNewTask("");
		}

		// Definimos función para borrar item de la lista. en el filter le proporcionamos el elemento y el indice de éste para que al eliminarlo se actualize y reestructure la lista.
		function deleteList (taskToRemove) {
			setTaskList((prevState) =>
			  prevState.filter((e,index) => index !== taskToRemove)
			);
		  }

		//  Funcion para que al pasar el mouse por la posición de la task la x aparezca y el hover se ponga en el indice del seleccionado.
			function mouseOn(index){
				setXVisible("d-flex");
				setHoverInTask(index);
			}
		
		// Función para que al mover el ratón fuera de la task, el hover cambie de estado a null y por lo tanto desaparezca la X.
				function mouseOff(){
					setHoverInTask(null);
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
					<input type="" className="form-control p-3 rounded-0 no-outline mb-1" id="task" aria-describedby="taskAdded" placeholder="What needs to be done?" 		onChange={(event)=> setNewTask(event.target.value)} onKeyDown={(event)=> event.key === "Enter" ? (addTask(), event.preventDefault()) : null}/>

					{/* Creamos ul donde se irán listando las tareas que vayamos escribiendo. Creamos un map donde por cada ent */}
					<ul className="p-0 d-flex flex-column gap-1">
						{taskList.map((item, index) => (
							// text-break sirve para que el texto se ajuste en el li y no se sobresalga en responsive sobretodo.
						 <li className="p-3 m-0 d-flex justify-content-between bg-white align-items-center border text-break" key={index} onMouseEnter={()=> mouseOn(index)} onMouseLeave={mouseOff}>
						{item}
							{/* creado un ternario de si el hover esta en el indice de la tarde la x sea visible en d-flex sino en d-none */}
						<span className={`${hoverInTask === index ? {xVisible} : "d-none"}`}  onClick={() => deleteList(index)}>X</span>
						</li>
						 ))}
					</ul>
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
