import React, { useState } from "react";
import { DragDropContext } from 'react-beautiful-dnd';
import Column from "./column";

const tasksObj = {
	tasks: {
		task1: {
			id: "task1",
			content: "Content 1"
		},
		task2: {
			id: "task2",
			content: "Content 2"
		},
		task3: {
			id: "task3",
			content: "Content 3"
		}
	},
	columns: {
		column1: {
			id: "column1",
			title: "To do",
			taskIds: ["task1", "task2", "task3"]
		},
		column2: {
			id: "column2",
			title: "In progress",
			taskIds: []
		},
		column3: {
			id: "column3",
			title: "Done",
			taskIds: []
		}
	},
	columnOrder: ["column1", "column2", "column3"]
};

function ReactBeautifulDnD() {
	const [tasks, setTasks] = useState(tasksObj.tasks);
	const [columns, setColumns] = useState(tasksObj.columns);
	const [columnOrder, setColumnOrder] = useState(tasksObj.columnOrder);

	const onDragEnd = (result) => {
		const { destination, source, draggableId } = result;
		if (!destination) { return; }
		
		if (destination.droppableId === source.droppableId &&
			destination.index === source.index) {
				return;
		}
	
		// const column = columns[source.droppableId];
		// const taskIds = [...column.taskIds];

		// const start = columns[source.droppableId];
		// const end = columns[destination.droppableId];

		// console.log("st", start)
		// console.log("end", end)

		// if (start === end) {

		// }

		if (source.droppableId === destination.droppableId) {
			const column = columns[source.droppableId];
			const taskIds = [...column.taskIds];

			taskIds.splice(source.index, 1);
			taskIds.splice(destination.index, 0, draggableId);
	
			setColumns({
				...columns,
				[source.droppableId]: {
					...column,
					taskIds
				}
			});
		}
		else {
			const fromColumn = columns[source.droppableId];
			const toColumn = columns[destination.droppableId];
			const fromTaskIds = [...fromColumn.taskIds];
			const toTaskIds = [...toColumn.taskIds];
			
			fromTaskIds.splice(source.index, 1);
			toTaskIds.splice(destination.index, 0, draggableId);

			setColumns({
				...columns,
				[source.droppableId]: {
					...fromColumn,
					taskIds: fromTaskIds
				},
				[destination.droppableId]: {
					...toColumn,
					taskIds: toTaskIds
				}
			});
		}
	};


	// const onDragEnd = (result) => {
	// 	const { destination, source, draggableId } = result;
	// 	if (!destination) { return; }
		
	// 	if (destination.droppableId === source.droppableId &&
	// 		destination.index === source.index) {
	// 			return;
	// 	}
	
	// 	const column = columns[source.droppableId];
	// 	const taskIds = [...column.taskIds];
	// 	taskIds.splice(source.index, 1);
	// 	taskIds.splice(destination.index, 0, draggableId);

	// 	setColumns({
	// 		...columns,
	// 		[source.droppableId]: {
	// 			...column,
	// 			taskIds
	// 		}
	// 	});
	// };

	return (
		<DragDropContext
		  onDragEnd={onDragEnd}
		>
			<div className="columns">
				{columnOrder.map(columnId => {
					const column = columns[columnId];
					const taskList = column.taskIds.map(taskId => tasks[taskId]);
					return <Column key={column.id} column={column} tasks={taskList} />;
				})}
			</div>
		</DragDropContext>
	)
}

export default ReactBeautifulDnD;
