import { createServer, Factory, Model, Response } from "miragejs";
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
      server.createList("user", 200);
    },

    routes() {
      this.namespace = "api";

      // A chamada para a api do Mirage vai demorar 750 milissegundos para acontecer
      this.timing = 750;

      // Shorthand para listar e criar usuários
      this.get("/users", function (schema, request) {
        const { page = 1, per_page = 10 } = request.queryParams;

        const total = schema.all("user").length;

        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);

        // Com a serialização, os registros do mirage passam pelas configurações de model
        const users = this.serialize(schema.all("user"))
          .users.slice(pageStart, pageEnd);

        // Para que a resposta tenha header, já que dados como o total de usuários é um metadado e não faz parte do corpo da resposta
        return new Response(200, { "x-total-count": String(total) }, { users });
      });

      this.get("/users/:id");
      this.post("/users");

      // Atribui como string vazia para não entrar em conflito com as rotas de api do next
      this.namespace = "";

      // Todas as chamadas enviadas pelo endereço api passam pelo mirage
      this.passthrough();
    }
  });

  return server;
}