import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Notice {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  isShow: boolean;

  @Column('text')
  content: string;
}
