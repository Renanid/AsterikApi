import { getRepository } from "typeorm";
import { tb_cliente } from "../entity/Cliente";
import { tb_funcionario } from "../entity/Funcionario";
import { Request, Response } from "express";

const entity = tb_cliente;

export const listClientes = async (request: Request, response: Response) => {
  try{
    var data = undefined;

    var id = request.body.id;
    var nome = request.body.nome;
    var cpf = request.body.cpf;
    var sexo = request.body.sexo;
    var data_nascimento = request.body.data_nascimento;
    var email = request.body.email;
    var telefone = request.body.telefone;
    var pais = request.body.pais;
    var cidade = request.body.cidade;
    var estado = request.body.estado;
    var endereco = request.body.endereco;
    var cep = request.body.cep;

    if (
      id ||
      nome ||
      cpf ||
      sexo != null ||
      data_nascimento ||
      email ||
      telefone ||
      pais ||
      cidade ||
      estado ||
      endereco ||
      cep
    ) {
      data = await getRepository(entity).find({
        where: [
          { id },
          { nome },
          { cpf },
          { sexo },
          { data_nascimento },
          { email },
          { telefone },
          { pais },
          { cidade },
          { estado },
          { endereco },
          { cep },
        ],
      });
    } else {
      data = await getRepository(entity).find();
    }

    if (data != undefined) {
      return response.json(data);
    } else {
      return response
        .status(404)
        .json({ message: "Nenhum registro foi encontrado!" });
    }
  }
  catch (e) {
    console.log('Erro Interno do Servidor, entre em contato com a equipe', e);
  }
};

export const saveCliente = async (request: Request, response: Response) => {
  try{
    var nome = request.body.nome;
    var cpf = request.body.cpf;
    var sexo = request.body.sexo;
    var data_nascimento = request.body.data_nascimento;
    var email = request.body.email;
    var telefone = request.body.telefone;
    var pais = request.body.pais;
    var cidade = request.body.cidade;
    var estado = request.body.estado;
    var endereco = request.body.endereco;
    var cep = request.body.cep;
    var senha = request.body.senha;

    if (
      nome &&
      cpf &&
      sexo != null &&
      data_nascimento &&
      email &&
      telefone &&
      pais &&
      cidade &&
      estado &&
      endereco &&
      cep &&
      senha
    ) {
      const validarEmailFuncionario = await getRepository(tb_funcionario).findOne({ email });
      const validarEmailCliente = await getRepository(entity).findOne({ email });

      if (validarEmailFuncionario == undefined &&validarEmailCliente == undefined) {
        const data = await getRepository(entity).save(request.body);

        if (data != undefined) {
          return response.json(data);
        } else {
          return response
            .status(424)
            .json({ message: "Não foi possível cadastrar esse hóspede!" });
        }
      } else {
        return response
          .status(401)
          .json({ message: "E-mail já cadastrado no sistema!" });
      }
    } else {
      return response
        .status(409)
        .json({ message: "Existe(m) campo(s) obrigatório(s) vazio(s)!" });
    }
  }
  catch (e) {
    console.log('Erro Interno do Servidor, entre em contato com a equipe', e);
  }
};

export const getCliente = async (request: Request, response: Response) => {
  try{
    const { id } = request.params;
    const data = await getRepository(entity).findOne(id);

    if (data != undefined) {
      return response.json(data);
    } else {
      return response.status(404).json({ message: "Hóspede não encontrado!" });
    }
  }
  catch (e) {
    console.log('Erro Interno do Servidor, entre em contato com a equipe', e);
  }
};

export const updateCliente = async (request: Request, response: Response) => {
  try{
    const { id } = request.params;
    const dataUpdated = await getRepository(entity).findOne(id);

    var nome = request.body.nome;
    var cpf = request.body.cpf;
    var sexo = request.body.sexo;
    var data_nascimento = request.body.data_nascimento;
    var email = request.body.email;
    var telefone = request.body.telefone;
    var pais = request.body.pais;
    var cidade = request.body.cidade;
    var estado = request.body.estado;
    var endereco = request.body.endereco;
    var cep = request.body.cep;

    if (nome && cpf && sexo != null && data_nascimento && email && telefone && pais && cidade && estado && endereco && cep) {
      const validarEmailFuncionario = await getRepository(tb_funcionario).findOne({ email });
      const validarEmailCliente = await getRepository(entity).findOne({ email });

      if ((validarEmailFuncionario == undefined && validarEmailCliente == undefined) || ((validarEmailFuncionario != undefined && dataUpdated.id == validarEmailFuncionario.id ) || (validarEmailCliente != undefined && dataUpdated.id == validarEmailCliente.id))) {

        const data = await getRepository(entity).update(id, request.body);

        if (data.affected == 1) {
          return response.json(dataUpdated);
        } else {
          return response
            .status(404)
            .json({ message: "Hóspede não encontrado!" });
        }
      } else {
        return response
          .status(401)
          .json({ message: "E-mail já cadastrado no sistema!" });
      }
    } else {
      return response
        .status(409)
        .json({ message: "Existe(m) campo(s) obrigatório(s) vazio(s)!" });
    }
  }
  catch (e) {
    console.log('Erro Interno do Servidor, entre em contato com a equipe', e);
  }
};

export const deleteCliente = async (request: Request, response: Response) => {
  try{
    const { id } = request.params;
    const data = await getRepository(entity).delete(id);

    if (data.affected == 1) {
      return response
        .status(200)
        .json({ message: "Hóspede excluído com sucesso!" });
    } else {
      return response.status(404).json({ message: "Hóspede não encontrado!" });
    }
  }
  catch (e) {
    console.log('Erro Interno do Servidor, entre em contato com a equipe', e);
  }
};
