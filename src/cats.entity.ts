import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class user {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    unique: true,
  })
  username: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  name: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  email: string;

  @Column({
    type: 'varchar',
    nullable: false,
    unique: true,
  })
  phone: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  password: string;

  @Column({
    type: 'varchar',
    nullable: false,
    unique: true,
  })
  confirmpassword: string;
}
