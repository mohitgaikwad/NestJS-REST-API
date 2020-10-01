import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ItemFile } from "../file/item.file";

@Entity()
export class Item {
    @PrimaryGeneratedColumn('uuid')
    id: string;

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
    @Column({length: 150, nullable: true})
    profile_photo: string;
    
    toResponseObject(): ItemFILE {
        const { id, name, email } = this;
        const responseObject: ItemFILE = {
            id,
            name,
            email,
        };
        return responseObject;
    }
}
