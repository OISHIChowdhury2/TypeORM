import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class SuperCompany {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string
}