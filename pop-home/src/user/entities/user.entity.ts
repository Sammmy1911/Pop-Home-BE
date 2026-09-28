import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'varchar' , unique: true})
    username: string

    @Column({type: 'varchar' ,  length: 25, unique: true})
    password: string
    @Column({type: 'varchar' , unique: true})
    @Column({ nullable: true })
    phone: string;
    @Column({ nullable: true })
    profileImage: string;
    @Column({ default: true })
    isActive: boolean;

    @Column({type: 'timestamp' , default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date;

    



    


}
