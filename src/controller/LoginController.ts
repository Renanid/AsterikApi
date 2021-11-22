import { getRepository } from "typeorm";
import { tb_cliente } from "../entity/Cliente";
import { tb_funcionario } from "../entity/Funcionario";
import { Request, Response } from "express";
var nodemailer = require("nodemailer");

export const postLogin = async(request: Request, response: Response) => {
    try{
        var email = request.body.email
        var senha = request.body.senha

        if(email && senha){
            const loginFuncionario = await getRepository(tb_funcionario).findOne({
                email: request.body.email,
                senha: request.body.senha
            });
        
            if (loginFuncionario != undefined) {
                return response.json(loginFuncionario);
            }
            else {
                const loginCliente = await getRepository(tb_cliente).findOne({
                    email: request.body.email,
                    senha: request.body.senha
                });
            
                if (loginCliente != undefined) {
                    return response.json(loginCliente);
                }
                else {
                    return response.status(403).json( {message: "Dados Inválidos!"} )
                }
            }
        }else if(!email && !senha){
            return response.status(403).json( {message: "Dados Inválidos!"} )
        }else if (!senha){
            return response.status(403).json( {message: "Senha inválida!"} )
        } else {
            return response.status(403).json( {message: "Email inválido!"} )
        }
    }
    catch (e) {
      console.log('Erro Interno do Servidor, entre em contato com a equipe', e);
    }
};

const transporter = nodemailer.createTransport({
    service: process.env.nodemailerservice,
    auth: {
      user: process.env.nodemaileruser,
      pass: process.env.nodemailerpass,
    },
  });


export const getRecuperao = async(request: Request, response: Response) => {
    try{
        var email = request.body.email

        if(email){
            const loginFuncionario = await getRepository(tb_funcionario).findOne({
                email: request.body.email
            });
        
            if (loginFuncionario != undefined) {

                var mailOptions = {
                    from: process.env.nodemaileruser,
                    to: loginFuncionario.email,
                    subject: 'Recuperação de acesso do Asterisk Hotel',
                    html: 'Olá funcionário ' + loginFuncionario.nome + ' estamos enviando a sua senha de acesso do Asterisk Hotel<br><br>Anote em um lugar seguro<br><br><b>Sua senha:<b> <h1>' + loginFuncionario.senha + '</h1>'
                };
                
                transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                        return response.status(401).json( {message: "Ops, tivemos um problema, a recuperação de senha não pode ser enviada para o seu email!"} )
                    } else {
                        return response.json( {message: "E-mail enviado com sucesso!"} )
                    }
                });
            }
            else {
                const loginCliente = await getRepository(tb_cliente).findOne({
                    email: request.body.email
                });
            
                if (loginCliente != undefined) {
                    var mailOptions = {
                        from: process.env.nodemaileruser,
                        to: loginCliente.email,
                        subject: 'Recuperação de acesso do Asterisk Hotel',
                        html: 'Olá ' + loginCliente.nome+ ' estamos enviando a sua senha de acesso do Asterisk Hotel<br><br>Anote em um lugar seguro<br><br><b>Sua senha:<b> <h1>' + loginCliente.senha + '</h1>'
                    };
                    
                    transporter.sendMail(mailOptions, function(error, info){
                        if (error) {
                            return response.status(401).json( {message: "Ops, tivemos um problema, a recuperação de senha não pode ser enviada para o seu email!"} )
                        } else {
                            return response.json( {message: "E-mail enviado com sucesso!"} )
                        }
                    });
                }
                else {
                    return response.status(403).json( {message: "Usuário não encontrado!"} )
                }
            }
        }
    }
    catch (e) {
      console.log('Erro Interno do Servidor, entre em contato com a equipe', e);
    }
};



