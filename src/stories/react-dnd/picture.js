import React, {useEffect} from "react";
import {useDrag} from "react-dnd";
import { getEmptyImage } from 'react-dnd-html5-backend'


function Picture({ id, url }) {
	const [collected, drag, dragPreview] = useDrag(() => ({
		type: "image",
		item: { id: id },

		// props
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),

		// monitoring
		end: (item, monitor) => (
			console.log("end", item, monitor.didDrop())
		),

		// controls
		// canDrag: (monitor) => (false),
		// options: {
		// 	dropEffect: "move",
		//  dropEffect: "copy"
		// },
		// isDragging: (monitor) => (true),
	}));

	const previewImage = () => {
		const image = new Image();
		image.src = "https://via.placeholder.com/100"
		return image;
	}

  useEffect(() => {
    dragPreview(previewImage())
  }, [])

	return (
		<div>
			<img
				ref={drag}
				key={id}
				src={url}
				style={{border: collected.isDragging ? "5px solid green" : "0px"}}></img>
		</div>
	);
}

export default Picture;
