import React, { memo, useCallback } from 'react';
import { List } from 'react-virtualized';
import TodoListItem from './TodoListItem';
import './TodoListItem.scss';

const WIDTH = 512;
const HEIGHT = 513;
const ROW_HEIGHT = 57;

const TodoList = ({ todos = [], onRemove = () => {}, onToggle = () => {} }) => {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          key={key}
          todo={todo}
          style={style}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      );
    },
    [onRemove, onToggle, todos],
  );

  const rowCount = todos.length;
  const style = { outline: 'none' };

  return (
    <List
      list={todos}
      style={style}
      width={WIDTH}
      height={HEIGHT}
      rowCount={rowCount}
      className="TodoList"
      rowHeight={ROW_HEIGHT}
      rowRenderer={rowRenderer}
    />
  );
};

export default memo(TodoList);
