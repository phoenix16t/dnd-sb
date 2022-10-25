// import React, { useState } from "react";
// import { DragDropContext, Droppable } from 'react-beautiful-dnd';
// import Column from "./column2";

// const tasks = {
// 	tasks: {
// 		task1: {
// 			id: "task1",
// 			content: "Content 1"
// 		},
// 		task2: {
// 			id: "task2",
// 			content: "Content 2"
// 		},
// 		task3: {
// 			id: "task3",
// 			content: "Content 3"
// 		}
// 	},
// 	columns: {
// 		column1: {
// 			id: "column1",
// 			title: "Contents",
// 			taskIds: ["task1", "task2", "task3"]
// 		}
// 	},
// 	columnOrder: ["column1"]
// };

// const onDragEnd = (result) => {
//   //
// };

// function ReactBeautifulDnD() {
// 	const [data, setData] = useState(tasks);

// 	return (
// 		<DragDropContext
// 		  onDragEnd = {onDragEnd}
// 		>
// 			{data.columnOrder.map(columnId => {
// 				const column = data.columns[columnId];
// 				const tasks = column.taskIds.map(taskId => data.tasks[taskId]);

// 				return (
// 					<div className="column" key={column.id}>
// 						<h3>{column.title}</h3>

// 						<Droppable droppableId={column.id}>
// 							{(provided) => (
// 								<Column
// 									column={column}
// 									tasks={tasks}
// 									innerRef={provided.innerRef}
// 									{...provided.droppableProps}
// 								/>
// 							)}
// 						</Droppable>
// 					</div>
// 				)
// 			})}
// 		</DragDropContext>
// 	)
// }

// export default ReactBeautifulDnD;
