import { getRepository, Not } from "typeorm";
import { tb_quarto } from "../entity/Quarto";
import { tb_cliente_controle } from "../entity/Cliente_Controle";
import { Request, Response } from "express";
import { IsNull } from "typeorm";

const entity = tb_quarto;

export const listQuarto = async (request: Request, response: Response) => {
  try{
    var data = undefined;

    var id = request.body.id;
    var numero = request.body.numero;
    var valor = request.body.valor;
    var descricao = request.body.descricao;
    var status = request.body.status;

    if (id || numero || valor || descricao || status != null) {
      data = await getRepository(entity).find({
        where: [{ id }, { numero }, { valor }, { descricao }, { status }],
      });
    } else {
      data = await getRepository(entity).find();
    }

    if (data != undefined) {
      return response.json(data);
    } else {
      return response
        .status(404)
        .json({ message: "Nenhum quarto foi encontrado!" });
    }
  }
  catch (e) {
    console.log('Erro Interno do Servidor, entre em contato com a equipe', e);
  }
};

export const saveQuarto = async (request: Request, response: Response) => {
  try{
    var numero = request.body.numero;
    var valor = request.body.valor;
    var descricao = request.body.descricao;
    var status = request.body.status;

    if (numero && valor && descricao && status != null) {
      const data = await getRepository(entity).save(request.body);

      if (data != undefined) {
        return response.json(data);
      } else {
        return response
          .status(424)
          .json({ message: "Não foi possível cadastrar esse quarto!" });
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

export const getQuarto = async (request: Request, response: Response) => {
  try{
    const { id } = request.params;
    const data = await getRepository(entity).findOne(id);

    if (data != undefined) {
      return response.json(data);
    } else {
      return response.status(404).json({ message: "Quarto não encontrado!" });
    }
  }
  catch (e) {
    console.log('Erro Interno do Servidor, entre em contato com a equipe', e);
  }
};

export const updateQuarto = async (request: Request, response: Response) => {
  try{
    var numero = request.body.numero;
    var valor = request.body.valor;
    var descricao = request.body.descricao;
    var status = request.body.status;

    if (numero && valor && descricao && status != null) {
      const { id } = request.params;
      const data = await getRepository(entity).update(id, request.body);

      if (data.affected == 1) {
        const dataUpdated = await getRepository(entity).findOne(id);
        return response.json(dataUpdated);
      } else {
        return response.status(404).json({ message: "Quarto não encontrado!" });
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

export const deleteQuarto = async (request: Request, response: Response) => {
  try{
    const { id } = request.params;
    const data = await getRepository(entity).delete(id);

    if (data.affected == 1) {
      return response
        .status(200)
        .json({ message: "Quarto excluído com sucesso!" });
    } else {
      return response.status(404).json({ message: "Quarto não encontrado!" });
    }
  }
  catch (e) {
    console.log('Erro Interno do Servidor, entre em contato com a equipe', e);
  }
};

export const ListOcupacao = async (request: Request, response: Response) => {
  try{
    var data = undefined;
    var status = request.body.status;

    if (status != null) {
      data = await getRepository(entity).find({
        where: [{ status }],
      });
    } else {
      data = await getRepository(entity).find();
    }

    if (data != undefined) {
      return response.status(200).json(data);
    } else {
      return response
        .status(500)
        .json({ message: "Erro interno do servidor, tentar novamente!" });
    }
  }
  catch (e) {
    console.log('Erro Interno do Servidor, entre em contato com a equipe', e);
  }
};
