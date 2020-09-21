import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Item {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({length: 10, nullable: false})
    name: string;

    @Column({length: 10, unique: true, nullable: false})
    email: string;
    
    @Column({length: 50, nullable: false})
    password: string;
    
    @Column({length: 10, nullable: true})
    phoneno: string;
    
    @Column({length: 100, nullable: true})
    address: string;
}
