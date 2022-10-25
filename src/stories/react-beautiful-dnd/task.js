import { Draggable } from "react-beautiful-dnd";

const taskStyles = (snapshot) => ([
	"task",
	snapshot.isDragging ? "drag" : "",
	snapshot.isDropAnimating ? "drop" : ""
].join(" "));

function Task({ task, index }) {
	return (
		<Draggable
			draggableId={task.id}
			index={index}
		>
			{(provided, snapshot) => (
				<div
					className={taskStyles(snapshot)}
					ref={provided.innerRef}
					{...provided.draggableProps}
				>
					<div
						className="handle"
						{...provided.dragHandleProps}
					></div>
					{task.content}
				</div>
			)}
		</Draggable>
	)
}

export default Task;
