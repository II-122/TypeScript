import React, { useState } from 'react';
import { Button, Form, Tab } from 'react-bootstrap';
import TodoModal from './TodoModal';

type Todo = {
    id : number;
    text : string;
    isChecked : boolean;
};

const TodoList : React.FC = () => {
    const title : string = "오늘 할 일";

    // 구조 분해 할당
    let [todos, setTodos] = useState<Todo[]>([
        { id : 1, text : '강의 수강', isChecked : false },
        { id : 2, text : '라이브 세션', isChecked : false },
        { id : 3, text : 'RBF 회의', isChecked : false }
    ]);

    let [newTodo, setNewTodo] = useState<string>('');
    let [showDetail, setShowDetail] = useState<boolean>(false);
    let [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

    const handleCheckedChange = (itemId : number) => {
        setTodos((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId ? { ...item, isChecked : !item.isChecked } : item
            )
        )
    };

    const addTodo = () => {
        // trim() : newTodo 입력 값이 변화하고 비어있지 않다면
        if(newTodo.trim() !== '') {
            setTodos([...todos, { id : Date.now(), text : newTodo, isChecked : false }]);
            setNewTodo('');
        }
    };

    const removeTodo = (id : number) => {
        // .filter : 특정 조건에 맞춰진 데이터들을 리턴
        setTodos(todos.filter((todo) => todo.id !== id))    // 해당 id에 해당하는 배열 값 제외
    }

    const handleTodoClick = (todo : Todo) => {
        setShowDetail(true);
        setSelectedTodo(todo);
    }

    const handleCloseDetail = () => {
        setShowDetail(false);
    }

    return(
        <div>
            <h1 className='test'>{title}</h1>
            <p/>
            <div className='container'>
                <div>
                    <input type = "text"
                        placeholder="할 일 입력"
                        style={{ marginRight : '15px', writingMode : 'horizontal-tb' }}
                        onChange={(e)=>setNewTodo(e.target.value)}
                    />
                    <Button onClick={addTodo}>추가</Button>
                </div>
                <p/>
                <div className='board'>
                    <ul>
                        {
                            todos.map((todo) => (
                                <div>
                                    <input type="checkbox"
                                    onChange={() => {
                                        handleCheckedChange(todo.id);
                                    }}
                                    />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <span onClick={() => handleTodoClick(todo)}>
                                        {
                                            todo.isChecked ?
                                            <del><text key={todo.id}>{todo.text}</text></del>
                                            : <text key={todo.id}>{todo.text}</text>
                                        }
                                    </span>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Button variant="outline-dark" size="sm"
                                        onClick={() => removeTodo(todo.id)}    
                                    >삭제</Button>
                                </div>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <TodoModal show={showDetail} todo={selectedTodo} handleClose={handleCloseDetail}></TodoModal>
        </div>
    );
};

export default TodoList;