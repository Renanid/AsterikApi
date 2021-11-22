import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn
} from 'typeorm';

import { tb_cliente } from './Cliente';
import { tb_quarto } from './Quarto';

@Entity()
export class tb_cliente_controle {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'date', nullable: false })
  data_registro: string;

  @Column({ type: 'date', nullable: false })
  checkin: string;

  @Column({ type: 'date', nullable: true })
  checkout: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  obs: string;

  @Column({ type: 'integer', nullable: false })
  id_quarto: number;

  @Column({ type: 'integer', nullable: false})
  id_cliente: number;

  @ManyToOne(() => tb_cliente, { eager: true })
  @JoinColumn({ name: "id_cliente" })
  cliente: tb_cliente;

  @ManyToOne(() => tb_quarto, { eager: true })
  @JoinColumn({ name: "id_quarto" })
  quarto: tb_quarto;

  @UpdateDateColumn()
  ultima_atualizacao: Date;
}
