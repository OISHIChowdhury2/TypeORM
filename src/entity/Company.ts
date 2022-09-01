import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Product } from "./Product";
@Entity()
export class Company {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    Adress: string;

    @OneToMany(()=> Product, (product)=> product.company, {cascade : true, eager: true})
    product :Product[]

}