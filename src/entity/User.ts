import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number; // El ! indica que será asignado por TypeORM

    @Column()
    firstName!: string;

    @Column()
    lastName!: string;

    @Column()
    age!: number;
}