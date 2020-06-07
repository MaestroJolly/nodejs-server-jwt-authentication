import { UsersService } from "../../components/users/users.service";
import data from './mocked_data/user.data';

const usersService = new UsersService;

test('register a user', async () =>{
    try {
        const register = await usersService.register(data);
        expect(typeof register).toBe('object');
    } catch (error) {
        
    }
});



