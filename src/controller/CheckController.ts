import { getRepository, Not } from "typeorm";
import { tb_quarto } from "../entity/Quarto";
import { tb_cliente } from "../entity/Cliente";
import { tb_cliente_controle } from "../entity/Cliente_Controle";
import { Request, Response } from "express";
import { IsNull } from "typeorm";

const entity = tb_cliente_controle;
const entityCliente = tb_cliente;

export const listCheck = async (request: Request, response: Response) => {
  try{
    var data = undefined;

    var data_registro = request.body.data_registro;
    var checkin = request.body.checkin;
    var checkout = request.body.checkout;
    var id_quarto = request.body.id_quarto;
    var id_cliente = request.body.id_cliente;
    var nome = request.body.nome;
    var cpf = request.body.cpf;
    var telefone = request.body.telefone;

    if (nome || cpf || telefone) {
      var dataCliente = await getRepository(entityCliente).findOne({
          where: [{ nome }, { cpf }, { telefone }],
       });
       
       if (dataCliente != undefined){
        id_cliente = dataCliente.id;
        data = await getRepository(entity).find({
          where: [{ data_registro }, { checkin }, { checkout }, { id_quarto }, { id_cliente }],
        });
       }
       
    }else{

      if (data_registro || checkin || checkout || id_quarto || id_cliente) {
        data = await getRepository(entity).find({
          where: [{ data_registro }, { checkin }, { checkout }, { id_quarto }, { id_cliente }],
        });
      } else {
        data = await getRepository(entity).find();
        console.log(data);
      }

    }

    if (data != undefined) {
      return response.json(data);
    } else {
      return response
        .status(404)
        .json({ message: "Nenhum Checks foi encontrado!" });
    }
  }
  catch (e) {
    console.log('Erro Interno do Servidor, entre em contato com a equipe', e);
  }
};

export const saveCheck = async (request: Request, response: Response) => {
  try{
    var data_registro = request.body.data_registro;
    var checkin = request.body.checkin;
    var checkout = request.body.checkout;
    var id_quarto = request.body.id_quarto;
    var id_cliente = request.body.id_cliente;
    var obs = request.body.obs;

    if (data_registro && checkin && id_quarto && id_cliente) {

      const data = await getRepository(entity).save(request.body);
      return response.json(data);

    } else {
      return response
        .status(409)
        .json({ message: "Existe(m) campo(s) obrigatório(s) vazio(s)!" });
    }
    
  }
  catch (e) {
    console.log('Erro Interno do Servidor, entre em contato com a equipe', e);
  }
}

export const getCheck = async (request: Request, response: Response) => {
  try{
    const { id } = request.params;
    const data = await getRepository(entity).findOne(id);

    if (data != undefined) {
      return response.json(data);
    } else {
      return response.status(404).json({ message: "Nenhum Check encontrado!" });
    }
  }
  catch (e) {
    console.log('Erro Interno do Servidor, entre em contato com a equipe', e);
  }
};

export const updateCheck = async (request: Request, response: Response) => {
  try{
    var data_registro = request.body.data_registro;
    var checkin = request.body.checkin;
    var checkout = request.body.checkout;
    var id_quarto = request.body.id_quarto;
    var id_cliente = request.body.id_cliente;
    var obs = request.body.obs;

    if (data_registro && checkin && id_quarto && id_cliente) {
      const { id } = request.params;
      const data = await getRepository(entity).update(id, request.body);

      if (data.affected == 1) {
        const dataUpdated = await getRepository(entity).findOne(id);
        return response.json(dataUpdated);
      } else {
        return response.status(404).json({ message: "Nenhum Check encontrado!" });
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

export const deleteCheck = async (request: Request, response: Response) => {
  try{
    const { id } = request.params;
    const data = await getRepository(entity).delete(id);

    if (data.affected == 1) {
      return response
        .status(200)
        .json({ message: "Check excluído com sucesso!" });
    } else {
      return response.status(404).json({ message: "Nenhum Check encontrado!" });
    }
  }
  catch (e) {
    console.log('Erro Interno do Servidor, entre em contato com a equipe', e);
  }
};