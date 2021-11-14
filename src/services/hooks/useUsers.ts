import { useQuery } from "react-query";
import { api } from "../api";

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

type GetUsersResponse = {
  totalCount: number;
  users: User[];
}

export async function getUsers(page: number): Promise<GetUsersResponse> {
  const { data, headers } = await api.get("users", {
    params: { page },
  });

  const totalCount = Number(headers["x-total-count"]);

  const users = data.users.map(user => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.createdAt).toLocaleDateString("pt-BR", {
        day: "2-digit", month: "long", year: "numeric"
      }),
    }
  })

  return { users, totalCount };
}

export function useUsers(page: number, options) {
  // users => chave para se referir ao cache
  // Sempre que houver uma informação que vai mudar o retorno do react query, é preciso alterar o nome da chave
  // getUsers() => executa a função no momento em que o código é criado
  // () => getUsers(page) => executa a função quando a query for lançada
  return useQuery(["users", page], () => getUsers(page), {
    // O dado é considerado recente durante dez minutos após a requisição
    staleTime: 1000 * 60 * 10, // 10 min
    ...options,
  });
}