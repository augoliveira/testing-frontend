// 1 - Checar status do usuario

import { User } from '@/domain/entities/user';

describe('User', () => {
  it('should check user status', () => {
    const statusId = 4;
    const user = new User(statusId);

    const output = user.isActive();

    expect(output).toBe(true);
  });

  it('should check user status', () => {
    const statusId = 4;
    const newName = 'John';
    const user = new User(statusId);

    user.setName(newName);

    expect(user.getName()).toBe(newName);
  });
});
