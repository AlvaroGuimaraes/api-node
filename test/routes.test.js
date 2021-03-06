const server = require("../src/index");
const request = require("supertest");
const { TestScheduler } = require("jest");

const lojaMock = {
  id: "5f0de6fc3c1bd80cbc25cf30",
  name: "Loja J",
  address: "Rua teste, 1234567",
  phone: "(00) 3333-3333",
  cnpj: "00.000.000/0000-03",
  workingHour: "Diariamente das 11hs às 23hs",
  city: "Cidade FGH",
  state: "B",
};

const cityState = {
  city: "Cidade FGH",
  state: "B",
};

const id = "5f0de6fc3c1bd80cbc25cf30";

beforeAll(async () => {
  console.log("INICIANDO TESTES");
});

describe("Iniciando testes: ", () => {
  test("Carregar todas as lojas", async () => {
    const response = await request(server).get("/api/loja");
    expect(response.status).toEqual(200);
  });

  test("Carregar loja por ID", async () => {
    const response = await request(server).get(`/api/loja/${id}`);
    expect(response.status).toEqual(200);
  });

  test("Salvar loja", async () => {
    const response = await request(server).post("/api/loja").send(lojaMock);
    expect(response.status).toEqual(201);
  });

  test("Atualizar loja", async () => {
    const response = await request(server).put("/api/loja").send(lojaMock);
    expect(response.status).toEqual(200);
  });

  test("Excluir loja", async () => {
    const response = await request(server).delete(`/api/loja/${id}`);
    expect(response.status).toEqual(200);
  });

  test("Carregar lojas por cidade/estado", async () => {
    const response = await request(server).get(`/api/loja`).send(cityState);
    expect(response.status).toEqual(200);
  });
});
