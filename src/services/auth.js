import Connection from '@/services/connection';

export default {
    register(data){
        return Connection().post('users/register',data);
    },
    login(data){
        return Connection().post('users/login', data);
    }

}