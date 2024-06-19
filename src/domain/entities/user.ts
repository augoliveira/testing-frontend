export enum UserStatusId {
  Pending = 3,
  Active = 4
}

export class User {
  private name = '';
  constructor(readonly statusId: number) {}

  isActive() {
    return [UserStatusId.Active].includes(this.statusId);
  }

  setName(newName: string) {
    this.name = newName;
  }

  getName() {
    return this.name;
  }
}
