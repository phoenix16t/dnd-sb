import React, { useState } from "react";
import Picture from "./picture";
import { useDrop } from "react-dnd";

const pictureList = [
	{
		id: 1,
		url: "https://cdn.shopify.com/s/files/1/0272/4770/6214/articles/Blog_-_Newborn_Kitten_Care_Week_by_Week_1200x800.jpg?v=1622221157"
	},
	{
		id: 2,
		url: "https://americanpetsalive.org/uploads/blog/Healthy-Kittens.jpg"
	},
	{
		id: 3,
		url: "https://www.petmd.com/sites/default/files/petmd-kitten-facts.jpg"
	}
]

function DragDrop(props) {
	const [board1, setBoard1] = useState(pictureList);
	const [board2, setBoard2] = useState([]);

	const [{isOver1}, drop1] = useDrop(() => ({
		accept: "image",
		drop: item => addImage1(item.id),
		collect: monitor => ({
			isOver: monitor.isOver()
		})
	}));

	const [{isOver2}, drop2] = useDrop(() => ({
		accept: "image",
		drop: item => addImage2(item.id),
		collect: monitor => ({
			isOver: monitor.isOver()
		})
	}));

	const addImage1 = (id) => {
		const picture = pictureList.filter(picture => picture.id === id)[0];
		setBoard1(board => board.includes(picture) ? board : [...board, picture]);
		setBoard2(board => board.filter(picture => picture.id !== id));
	};

	const addImage2 = (id) => {
		const picture = pictureList.filter(picture => picture.id === id)[0];
		setBoard2(board => board.includes(picture) ? board : [...board, picture]);
		setBoard1(board => board.filter(picture => picture.id !== id));
	};

	return (
		<div className="container">
			<div className="board" ref={drop1}>
				{board1.map(picture => (
					<Picture key={picture.id} id={picture.id} url={picture.url} />
				))}
			</div>

			<div className="board" ref={drop2}>
				{board2.map(picture => (
					<Picture key={picture.id} id={picture.id} url={picture.url} />
				))}
			</div>
		</div>
	);
}

export default DragDrop;
