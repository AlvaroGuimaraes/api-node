const Loja = require("../../models/loja.model");

async function getAll(req, res) {
  try {
    const data = await Loja.find();
    res.status(200);
    res.json(data);
  } catch (error) {
    res.status(500);
    res.json({ message: error });
  }
}

async function getOne(req, res) {
  try {
    const {
      params: { id },
    } = req;
    const data = await Loja.find({ _id: id });
    res.status(200);
    res.json({ data: data });
  } catch (error) {
    res.status(500);
    res.json({ message: error });
  }
}

async function save(req, res) {
  try {
    const { name, address, phone, cnpj, workingHour, city, state } = req.body;
    if (name && address && phone && cnpj && workingHour && city && state) {
      const data = await Loja.create({
        name,
        address,
        phone,
        cnpj,
        workingHour,
        city,
        state,
      });
      res.status(201);
      res.json({ message: "Loja criada com sucesso!" });
    } else {
      res.status(400);
      res.json({ message: "Existems campos que devem ser informados!" });
    }
  } catch (error) {
    console.log(error);
    res.status(500);
    res.json({ message: `ERROR ${error}` });
  }
}

async function update(req, res) {
  const { body } = req;

  try {
    if (body.id) {
      const params = { ...body };
      delete params.id;
      const data = await Loja.updateOne({ _id: body.id }, { $set: params });
      res.status(200);
      res.json({ message: `Loja ${body.id} atualizada com sucesso!` });
    } else {
      res.status(400);
      res.json({ message: `Erro ao atualizar loja!` });
    }
  } catch (error) {
    res.status(500);
    res.json({ message: `Erro: ${error}` });
  }
}

async function deleteOne(req, res) {
  const {
    params: { id },
  } = req;
  try {
    const data = await Loja.deleteOne({ _id: id });
    res.status(200);
    res.json({ message: `Loja ${id} removida com sucesso!` });
  } catch (error) {
    res.status(500);
    res.json({ message: error });
  }
}

async function getLojaCityState(req, res) {
  const { body } = req;
  try {
    const data = await Loja.find(body);
    res.status(200);
    res.json({ data });
  } catch (error) {
    res.status(500);
    res.json({ message: error });
  }
}

module.exports = {
  getAll,
  getOne,
  getLojaCityState,
  save,
  update,
  deleteOne,
};
