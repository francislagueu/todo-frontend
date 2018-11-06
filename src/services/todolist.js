import Connection from '@/services/connection';

export default {
    getAllTodoList(){
        return Connection().get('lists');
    },
    getOneTodoList(id){
        return Connection().get(`lists/${id}`);
    },
    createTodoList(data){
        return Connection().post('lists', data);
    },
    updateTodoList(id, data){
        return Connection().put(`lists/${id}`, data);
    },
    deleteTodoList(id){
        return Connection().delete(`lists/${id}`);
    }

}