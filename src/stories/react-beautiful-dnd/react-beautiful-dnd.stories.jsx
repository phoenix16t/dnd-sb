import React from "react";
import ReactBeautifulDnD from './index';
import { DragDropContext } from 'react-beautiful-dnd';
import './styles.scss';

export default {
  title: 'react-beautiful-dnd',
  component: DragDropContext
};

const Template = (args) => (
  <div className="react-beautiful-dnd">
    <ReactBeautifulDnD />
  </div>
);

export const TwoDropzones = Template.bind({});
