import Connection from '@/services/connection';

export default {
    
    getAllTodo(listId){
        return Connection().get(`list/${listId}/items`);
    },
    getOneTodo(id, listId){
        return Connection().get(`list/${listId}/items/${id}`);
    },
    createTodo(data, listId){
        return Connection().post(`lists/${listId}items`, data);
    },
    updateTodo(itemId,listId, data){
        return Connection().put(`lists/${listId}/items/${itemId}`, data);
    },
    deleteTodo(listId,itemId){
        return Connection().delete(`lists/${listId}items/${itemId}`);
    }

}