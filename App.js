import React, {useState} from 'react';
import { Text, SafeAreaView, StatusBar, FlatList, View, TouchableOpacity } from 'react-native';
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";

const App = () => {
    const [todoItems, setTodoItems] = useState([{text: "Task 1", completed: true}, {text: "Task 2", completed: false}]);

    // Add a new item to the state
    function addTodoItem(_text) {
        setTodoItems([...todoItems, {text:_text, completed: false}]);
    }

    // Delete an item from state by index
    function deleteTodoItem(_index){
        let tempArr = [...todoItems];
        tempArr.splice(_index, 1);
        setTodoItems(tempArr)
    }

    // Function to set completed to true by index.
    function completeTodoItem(_index){
        let tempArr = [...todoItems];
        tempArr[_index].completed = true;
        setTodoItems(tempArr)
    }

    // Render
    return (
        <>
            <StatusBar barStyle={"light-content"} backgroundColor={"#212121"}/>
            <SafeAreaView style={{padding: 16, justifyContent: 'space-between', flex: 1}}>
                <Text style={{fontSize: 25, fontWeight: 'bold', textAlign: 'center'}}>To-do List</Text>
                <FlatList
                    data={todoItems}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) => {
                        return (
                            <TodoItem
                                item={item}
                                deleteFunction={() => deleteTodoItem(index)}
                                completeFunction={() => completeTodoItem(index)}
                            />
                        )
                    }}
                />
                <TodoInput onPress={addTodoItem} />
            </SafeAreaView>
        </>
    );
};

export default App;