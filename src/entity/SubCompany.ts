import {
    Entity,PrimaryGeneratedColumn,Column, ManyToMany, JoinTable,} from "typeorm"
import { SuperCompany } from "./SuperCompany"

@Entity()
export class SubCompany {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    text: string

    @ManyToMany(() => SuperCompany)
    @JoinTable()
    superCompany: SuperCompany[]
}