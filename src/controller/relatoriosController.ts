import { getRepository } from "typeorm";
import { tb_relatorio } from "../entity/Relatorio";
import { Request, Response } from "express";

const entity = tb_relatorio;

export const listRelatorios = async (request: Request, response: Response) => {
  try{ 
    var data = undefined;

    var id = request.body.id;
    var data = request.body.data;
    var aluguel = request.body.aluguel;
    var telefone = request.body.telefone;
    var plano_saude = request.body.plano_saude;
    var seguro = request.body.seguro;
    var tv = request.body.tv;
    var vr = request.body.vr;
    var lavanderia = request.body.lavanderia;
    var agua = request.body.agua;
    var vt = request.body.vt
    var energia = request.body.energia;
    var gas = request.body.gas;
    var internet = request.body.internet;
    var va = request.body.va;
    var faturamento = request.body.faturamento;
    var consumo = request.body.consumo;

    if (
      id ||
      data ||
      aluguel ||
      telefone ||
      plano_saude ||
      seguro ||
      tv ||
      vr ||
      lavanderia ||
      telefone ||
      agua ||
      vt ||
      energia ||
      gas ||
      internet ||
      va ||
      faturamento ||
      consumo
    ) {
      data = await getRepository(entity).find({
        where: [
          { id },
          { data },
          { aluguel },
          { telefone },
          { plano_saude },
          { seguro },
          { tv },
          { vr },
          { lavanderia },
          { telefone },
          { telefone },
          { agua },
          { vt },
          { energia },
          { gas },
          { internet },
          { va },
          { faturamento },
          { consumo }
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
        .json({ message: "Nenhum relatorio foi encontrado!" });
    }
  }
  catch (e) {
    console.log('Erro Interno do Servidor, entre em contato com a equipe', e);
  }
};

export const saveRelatorio = async (request: Request, response: Response) => {
  try{ 
    var data = request.body.data;
    var aluguel = request.body.aluguel;
    var telefone = request.body.telefone;
    var plano_saude = request.body.plano_saude;
    var seguro = request.body.seguro;
    var tv = request.body.tv;
    var vr = request.body.vr;
    var lavanderia = request.body.lavanderia;
    var agua = request.body.agua;
    var vt = request.body.vt
    var energia = request.body.energia;
    var gas = request.body.gas;
    var internet = request.body.internet;
    var va = request.body.va;
    var faturamento = request.body.faturamento;
    var consumo = request.body.consumo;

    if (
      data &&
      aluguel &&
      telefone &&
      plano_saude &&
      seguro &&
      tv &&
      vr &&
      lavanderia &&
      telefone &&
      agua &&
      vt &&
      energia &&
      gas &&
      internet &&
      va &&
      faturamento &&
      consumo
    ) {
        const data = await getRepository(entity).save(request.body);

        if (data != undefined) {
          return response.json(data);
        } else {
          return response
            .status(424)
            .json({ message: "Não foi possível cadastrar esse relatorio!" });
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

export const getRelatorio = async (request: Request, response: Response) => {
  try{
    const { id } = request.params;
    const data = await getRepository(entity).findOne(id);

    if (data != undefined) {
      return response.json(data);
    } else {
      return response
        .status(404)
        .json({ message: "Relatorio não encontrado!" });
    }
  }
  catch (e) {
    console.log('Erro Interno do Servidor, entre em contato com a equipe', e);
  }
};

export const updateRelatorio = async (request: Request,response: Response) => {
  try{ 
    const { id } = request.params;
    var data = request.body.data;
    var aluguel = request.body.aluguel;
    var telefone = request.body.telefone;
    var plano_saude = request.body.plano_saude;
    var seguro = request.body.seguro;
    var tv = request.body.tv;
    var vr = request.body.vr;
    var lavanderia = request.body.lavanderia;
    var agua = request.body.agua;
    var vt = request.body.vt
    var energia = request.body.energia;
    var gas = request.body.gas;
    var internet = request.body.internet;
    var va = request.body.va;
    var faturamento = request.body.faturamento;
    var consumo = request.body.consumo;

    if (
      data &&
      aluguel &&
      telefone &&
      plano_saude &&
      seguro &&
      tv &&
      vr &&
      lavanderia &&
      telefone &&
      agua &&
      vt &&
      energia &&
      gas &&
      internet &&
      va &&
      faturamento &&
      consumo) {
      
        const data = await getRepository(entity).update(id, request.body);

        if (data.affected == 1) {
          return response.json(data);
        } else {
          return response
            .status(404)
            .json({ message: "Relatorio não encontrado!" });
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

export const deleteRelatorio = async (
  request: Request,
  response: Response
) => {
  try{
    const { id } = request.params;
    const data = await getRepository(entity).delete(id);

    if (data.affected == 1) {
      return response
        .status(200)
        .json({ message: "Relatorio excluído com sucesso!" });
    } else {
      return response
        .status(404)
        .json({ message: "Relatorio não encontrado!" });
    }
  }
  catch (e) {
    console.log('Erro Interno do Servidor, entre em contato com a equipe', e);
  }
};
