import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragDrop2 from './dnd2';
import './styles.scss';

export default {
  title: 'react-dnd',
  components: {
    DndProvider,
    HTML5Backend
  }
};

const Template = (args) => (
  <DndProvider backend={HTML5Backend}>
    <div className="react-dnd">
      <DragDrop2 />
    </div>
  </DndProvider>
);

export const TwoDropzones = Template.bind({});
