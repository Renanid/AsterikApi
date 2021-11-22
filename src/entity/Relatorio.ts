import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class tb_relatorio {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'date', nullable: false })
  data: string;

  @Column({ type: 'money', nullable: false })
  aluguel: number;

  @Column({ type: 'money', nullable: false })
  telefone: number;

  @Column({ type: 'money', nullable: false })
  plano_saude: number;

  @Column({ type: 'money', nullable: false })
  seguro: number;

  @Column({ type: 'money', nullable: false })
  tv: number;

  @Column({ type: 'money', nullable: false })
  vr: number;

  @Column({ type: 'money', nullable: false })
  lavanderia: number;

  @Column({ type: 'money', nullable: false })
  agua: number;

  @Column({ type: 'money', nullable: false })
  vt: number;

  @Column({ type: 'money', nullable: false })
  energia: number;

  @Column({ type: 'money', nullable: false })
  gas: number;

  @Column({ type: 'money', nullable: false })
  internet: number;

  @Column({ type: 'money', nullable: false })
  va: number;

  @Column({ type: 'money', nullable: false })
  faturamento: number;

  @Column({ type: 'money', nullable: false })
  consumo: number;

  @UpdateDateColumn()
  ultima_atualizacao: Date;
}
