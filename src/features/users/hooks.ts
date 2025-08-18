import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { getUsers, createUser } from '../../api/users'
import { usersKeys } from './keys'
import type { CreateUser } from '../../models/user'

export function useUsersQuery() {
  return useQuery({ 
    queryKey: usersKeys.list(),
    queryFn: getUsers
  })
}

export function useCreateUser() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: CreateUser) => createUser(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: usersKeys.list() })
    }
  })
}