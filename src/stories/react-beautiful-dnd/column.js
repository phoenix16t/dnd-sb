import Task from "./task";
import { Droppable } from 'react-beautiful-dnd';

const taskListStyles = (snapshot) => ([
	"task-list",
	snapshot.isDraggingOver ? "drag" : ""
].join(" "));

function Column({ column, tasks }) {
	return (
		<div className="column">
		 	<h3>{column.title}</h3>

			<Droppable droppableId={column.id}>
				{(provided, snapshot) => (
					<div
						className={taskListStyles(snapshot)}
						ref={provided.innerRef}
						{...provided.droppableProps}	
					>
						{tasks.map((task, index) => (
							<Task key={task.id} task={task} index={index} />
						))}

						{provided.placeholder}
					</div>
				)}
			</Droppable>

		</div>
	)
}

export default Column;













// import Task from "./task";
// import { Droppable } from 'react-beautiful-dnd';
// // import TaskList from "./task-list";

// function Column({ column, tasks }) {
// 	return (
// 		<div className="column">
// 			<h3>{column.title}</h3>

// 			<Droppable droppableId={column.id}>
// 				{(provided, snapshot) => {
// 					console.log("co", snapshot)
// 					return (
// 					<div
// 					  ref={provided.innerRef}
// 						{...provided.droppableProps}
// 					>
// 						{tasks.map((task, index) => (
// 							<Task key={task.id} task={task} index={index} />
// 						))}
// 						{provided.placeholder}
// 					</div>
// 				)}}
// 			</Droppable>
// 		</div>
// 	)
// }

// export default Column;

// 				{/* {(provided) => { */}
// 					{/* <div */}
// 						// innerRef={provided.innerRef}
// 						// {...provided.droppableProps}
// 					{/* > */}
// 						{/* {tasks.map(task => ( */}
// 							{/* <Task key={task.id} task={task} /> */}
// 						{/* ))} */}
// 						{/* {provided.placeholder} */}
// 					{/* </div> */}
// 				{/* }} */}


// 				// {(provided) => {
// 				// 	<TaskList
// 				// 		tasks={tasks}
// 				// 		innerRef={provided.innerRef}
// 				// 		{...provided.droppableProps}
// 				// 	>
// 				// 		sdf
// 				// 	</TaskList>
// 				// }}