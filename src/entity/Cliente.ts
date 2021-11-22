import {
  Entity, Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity()
export class tb_cliente {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  nome: string;

  @Column({ type: 'varchar', length: 11, nullable: false })
  cpf: string;

  @Column({ type: 'bit', nullable: true })
  sexo: boolean;

  @Column({ type: 'date', nullable: true })
  data_nascimento: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  email: string;

  @Column({ type: 'varchar', length: 14, nullable: true })
  telefone: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  pais: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  cidade: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  estado: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  endereco: string;

  @Column({ type: 'varchar', length: 11, nullable: true })
  cep: string;

  @Column({ type: 'varchar', length: 15, nullable: false })
  senha: string;

  @UpdateDateColumn()
  ultima_atualizacao: Date;
}
