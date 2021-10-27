import { createServer, Factory, Model } from "miragejs";
import faker from "faker";

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

    // Serve para gerar dados em massa
    factories: {
      user: Factory.extend({
        name(i: number) {
          return `User ${i + 1}`;
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          // Dez dias antes da data atual
          return faker.date.recent(10);
        },
      })
    },

    seeds(server) {
      // Criar 200 usuários
      server.createList("user", 200);
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