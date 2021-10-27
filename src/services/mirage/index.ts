import { createServer, Model } from "miragejs";

type User = {
  name: string;
  email: string;
  created_at: string;
}

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({}),
    },
    routes() {
      this.namespace = "api";

      // A chamada para a api do Mirage vai demorar 750 milissegundos para acontecer
      this.timing = 750;

      // Shorthand para listar e criar usuários
      this.get("/users");
      this.post("/users");

      // Atribui como string vazia para não entrar em conflito com as rotas de api do next
      this.namespace = "";

      // Todas as chamadas enviadas pelo endereço api passam pelo mirage
      this.passthrough();
    }
  });

  return server;
}