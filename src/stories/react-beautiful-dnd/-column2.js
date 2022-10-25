// import Task from "./task2";
// import { Draggable } from 'react-beautiful-dnd';

// function Column({ column, tasks }) {
// 	return tasks.map((task, index) => (
// 		<Draggable
// 			draggableId={task.id}
// 			index={index}
// 			key={task.id}
// 		>
// 			{(provided => (
// 				<Task
// 					task={task}
// 					innerRef={provided.innerRef}
// 					{...provided.draggableProps}
// 					{...provided.dragHandleProps}
// 				/>
// 			))}
// 		</Draggable>
// 	));
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