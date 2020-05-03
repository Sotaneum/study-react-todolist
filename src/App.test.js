import React from 'react';
import { render } from '@testing-library/react';
import { TodoList, TodoInsert, TodoTemplate } from './components';
import App from './App';

describe('Component를 확인한다.', () => {
  describe('TodoInsert 컴포넌트를 확인한다.', () => {
    let todoInsert;
    test('TodoInsert 초기화', () => {
      todoInsert = render(<TodoInsert />);
    });
  });

  describe('TodoList 컴포넌트를 확인한다.', () => {
    let todoList;
    test('TodoList 초기화', () => {
      todoList = render(<TodoList />);
    });
  });

  describe('TodoTemplate 컴포넌트를 확인한다.', () => {
    let todoTemplate;
    test('TodoTemplate 초기화', () => {
      todoTemplate = render(<TodoTemplate />);
    });
  });
});

describe('App를 확인한다.', () => {
  let app;
  test('App 초기화', () => {
    app = render(<App />);
  });
});
