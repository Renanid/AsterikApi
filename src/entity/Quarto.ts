import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';


@Entity()
export class tb_quarto {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'integer', nullable: false })
  numero: number;

  @Column({ type: 'money', nullable: false })
  valor: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  descricao: string;

  @Column({ type: 'int', nullable: false })
  status: string;

  @UpdateDateColumn()
  ultima_atualizacao: Date;
}
