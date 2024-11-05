import { UserService } from '../src/application/UserService';

test('should create a new user', () => {
  const userService = new UserService();
  const user = userService.createUser('John Doe');
  expect(user.name).toBe('John Doe');
});