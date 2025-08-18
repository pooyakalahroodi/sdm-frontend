export type User = {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  department: string;
  active: boolean;
};

export type CreateUser = Omit<User, 'id'>;
