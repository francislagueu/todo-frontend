import Connection from '@/services/connection';
//import TodoList from '@/services/todolist';

export default {

    getAllTodo(listId) {
        //const list = await TodoList.getOneTodoList(listId);
        return Connection().get(`lists/${listId}/items`);
    },
    getOneTodo(id, listId) {
        return Connection().get(`lists/${listId}/items/${id}`);
    },
    createTodo(data, listId) {
        return Connection().post(`lists/${listId}/items`, data);
    },
    updateTodo( listId,itemId, data) {
        return Connection().put(`lists/${listId}/items/${itemId}`, data);
    },
    deleteTodo(listId, itemId) {
        return Connection().delete(`lists/${listId}/items/${itemId}`);
    }

}