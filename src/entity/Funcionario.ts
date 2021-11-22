import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';

@Entity()
export class tb_funcionario {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  nome: string;

  @Column({ type: 'varchar', length: 11, nullable: false })
  cpf: string;

  @Column({ type: 'varchar', length: 9, nullable: false })
  rg: string;

  @Column({ type: 'varchar', length: 11, nullable: false })
  pis: string;

  @Column({ type: 'varchar', length: 11, nullable: false })
  cnh: string;

  @Column({ type: 'char', nullable: false })
  sexo: string;

  @Column({ type: 'date', nullable: false })
  data_nascimento: string;

  @Column({ type: 'varchar', length: 15, nullable: false })
  estado_civil: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  email: string;

  @Column({ type: 'varchar', length: 14, nullable: false })
  telefone: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  pais: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  cidade: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  estado: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  endereco: string;

  @Column({ type: 'varchar', length: 11, nullable: false })
  cep: string;

  @Column({ type: 'bit', nullable: false })
  ativo: string;

  @Column({ type: 'varchar', length: 15, nullable: false })
  senha: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  cargo: string;

  @Column({ type: 'money', nullable: false })
  salario: string;

  @Column({ type: 'date', nullable: false })
  data_cadastro: string;

  @Column({ type: 'date', nullable: false })
  data_admissao: string;

  @Column({ type: 'date', nullable: true})
  data_demissao: string;

  @UpdateDateColumn()
  ultima_atualizacao: Date;
}
