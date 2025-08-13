export type User = {
  id: number;
  username: string;
  name: string;
  surname: string;
  // null/undefined permitted if backend can return missing department
  departmentName?: string | null;
};

export type CreateUser = {
  username: string;
  name: string;
  surname: string;
};
