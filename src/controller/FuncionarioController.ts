import { getRepository } from "typeorm";
import { tb_funcionario } from "../entity/Funcionario";
import { tb_cliente } from "../entity/Cliente";
import { Request, Response } from "express";

const entity = tb_funcionario;

export const listFuncionarios = async (request: Request, response: Response) => {
  try{ 
    var data = undefined;

    var id = request.body.id;
    var nome = request.body.nome;
    var cpf = request.body.cpf;
    var rg = request.body.rg;
    var pis = request.body.pis;
    var cnh = request.body.cnh;
    var sexo = request.body.sexo;
    var data_nascimento = request.body.data_nascimento;
    var estado_civil = request.body.estado_civil;
    var email = request.body.email;
    var telefone = request.body.telefone;
    var pais = request.body.pais;
    var cidade = request.body.cidade;
    var estado = request.body.estado;
    var endereco = request.body.endereco;
    var cep = request.body.cep;
    var ativo = request.body.ativo;
    var data_cadastro = request.body.data_cadastro;
    var data_admissao = request.body.data_admissao;
    var data_demissao = request.body.data_demissao;
    var senha = request.body.senha;
    var cargo = request.body.cargo;
    var salario = request.body.salario;

    if (
      id ||
      nome ||
      cpf ||
      rg ||
      pis ||
      cnh ||
      sexo != null ||
      data_nascimento ||
      estado_civil ||
      email ||
      telefone ||
      pais ||
      cidade ||
      estado ||
      endereco ||
      cep ||
      ativo != null ||
      data_cadastro ||
      data_admissao ||
      data_demissao ||
      senha ||
      cargo ||
      salario
    ) {
      data = await getRepository(entity).find({
        where: [
          { id },
          { nome },
          { cpf },
          { rg },
          { pis },
          { cnh },
          { sexo },
          { data_nascimento },
          { estado_civil },
          { email },
          { telefone },
          { pais },
          { cidade },
          { estado },
          { endereco },
          { cep },
          { ativo },
          { data_cadastro },
          { data_admissao },
          { data_demissao },
          { senha },
          { cargo },
          { salario },
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

export const saveFuncionario = async (request: Request, response: Response) => {
  try{ 
    var nome = request.body.nome;
    var cpf = request.body.cpf;
    var rg = request.body.rg;
    var pis = request.body.pis;
    var cnh = request.body.cnh;
    var sexo = request.body.sexo;
    var data_nascimento = request.body.data_nascimento;
    var estado_civil = request.body.estado_civil;
    var email = request.body.email;
    var telefone = request.body.telefone;
    var pais = request.body.pais;
    var cidade = request.body.cidade;
    var estado = request.body.estado;
    var endereco = request.body.endereco;
    var cep = request.body.cep;
    var ativo = request.body.ativo;
    var data_cadastro = request.body.data_cadastro;
    var senha = request.body.senha;
    var cargo = request.body.cargo;
    var salario = request.body.salario;

    if (
      nome &&
      cpf &&
      rg &&
      pis &&
      cnh &&
      sexo != null &&
      data_nascimento &&
      estado_civil &&
      email &&
      telefone &&
      pais &&
      cidade &&
      estado &&
      endereco &&
      cep &&
      ativo != null &&
      data_cadastro &&
      cargo &&
      salario
    ) {
      const validarEmailFuncionario = await getRepository(entity).findOne({email,});
      const validarEmailCliente = await getRepository(tb_cliente).findOne({email,});

      if (validarEmailFuncionario == undefined &&validarEmailCliente == undefined) {
        const data = await getRepository(entity).save(request.body);

        if (data != undefined) {
          return response.json(data);
        } else {
          return response
            .status(424)
            .json({ message: "Não foi possível cadastrar esse funcionário!" });
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

export const getFuncionario = async (request: Request, response: Response) => {
  try{
    const { id } = request.params;
    const data = await getRepository(entity).findOne(id);

    if (data != undefined) {
      return response.json(data);
    } else {
      return response
        .status(404)
        .json({ message: "Funcionário não encontrado!" });
    }
  }
  catch (e) {
    console.log('Erro Interno do Servidor, entre em contato com a equipe', e);
  }
};

export const updateFuncionario = async (request: Request,response: Response) => {
  try{ 
    const { id } = request.params;
    const dataUpdated = await getRepository(entity).findOne(id);

    var nome = request.body.nome;
    var cpf = request.body.cpf;
    var rg = request.body.rg;
    var pis = request.body.pis;
    var cnh = request.body.cnh;
    var sexo = request.body.sexo;
    var data_nascimento = request.body.data_nascimento;
    var estado_civil = request.body.estado_civil;
    var email = request.body.email;
    var telefone = request.body.telefone;
    var pais = request.body.pais;
    var cidade = request.body.cidade;
    var estado = request.body.estado;
    var endereco = request.body.endereco;
    var cep = request.body.cep;
    var ativo = request.body.ativo;
    var data_cadastro = request.body.data_cadastro;
    var senha = request.body.senha;
    var cargo = request.body.cargo;
    var salario = request.body.salario;

    if (nome && cpf && rg && pis && cnh && sexo != null && data_nascimento && estado_civil && email && telefone && pais && cidade && estado && endereco && cep && ativo != null && data_cadastro && cargo && salario) {
      const validarEmailFuncionario = await getRepository(entity).findOne({email});
      const validarEmailCliente = await getRepository(tb_cliente).findOne({email});

      if ((validarEmailFuncionario == undefined && validarEmailCliente == undefined) || ((validarEmailFuncionario != undefined && dataUpdated.id == validarEmailFuncionario.id ) || (validarEmailCliente != undefined && dataUpdated.id == validarEmailCliente.id))) {
        
        const data = await getRepository(entity).update(id, request.body);

        if (data.affected == 1) {
          
          return response.json(dataUpdated);
        } else {
          return response
            .status(404)
            .json({ message: "Funcionário não encontrado!" });
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

export const deleteFuncionario = async (
  request: Request,
  response: Response
) => {
  try{
    const { id } = request.params;
    const data = await getRepository(entity).delete(id);

    if (data.affected == 1) {
      return response
        .status(200)
        .json({ message: "Funcionário excluído com sucesso!" });
    } else {
      return response
        .status(404)
        .json({ message: "Funcionário não encontrado!" });
    }
  }
  catch (e) {
    console.log('Erro Interno do Servidor, entre em contato com a equipe', e);
  }
};
