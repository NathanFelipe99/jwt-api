import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {
    
    constructor(id: string, name: string, password: string){
        this.id = id
        this.name = name
        this.password = password
    }

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @Column()
    password: string
}