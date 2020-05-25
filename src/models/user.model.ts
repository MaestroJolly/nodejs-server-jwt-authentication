//user.model.ts
import { Table, Column, Model, PrimaryKey, IsUUID, AutoIncrement, AllowNull, NotEmpty, Unique, Index, CreatedAt, UpdatedAt } from 'sequelize-typescript';
 
export const UserN = 'Not a model';
export const NUser = 'Not a model';
export interface UserDTO{
    id: string,
    firstName: string,
    lastName: string,
    otherName: string,
    email: string,
    phonenumber: number,
    age: number,
    sex: string,
    country: string,
    password: string,
    isAdmin: boolean
}
 
@Table({
    tableName: 'Users',
    timestamps: true
})
export default class User extends Model<UserDTO> {
 
    @IsUUID(4)
    @PrimaryKey
    @Column
    id!: string;

    @AllowNull(false)
    @NotEmpty
    @Column
    firstName!: string;

    @AllowNull(false)
    @NotEmpty
    @Column
    lastName!: string;

    @AllowNull(true)
    @Column
    otherName!: string;

    @Index
    @AllowNull(false)
    @NotEmpty
    @Unique
    @Column
    email!: string;

    @AllowNull(false)
    @NotEmpty
    @Column
    phonenumber!: string;
    
    @AllowNull(false)
    @NotEmpty
    @Column
    age!: number;

    @Index
    @AllowNull(false)
    @NotEmpty
    @Column
    sex!: string;

    @Index
    @AllowNull(false)
    @NotEmpty
    @Column
    country!: string;

    @AllowNull(false)
    @NotEmpty
    @Column
    password!: string;

    @AllowNull(false)
    @NotEmpty
    @Column
    isAdmin!: boolean;

    @AllowNull(false)
    @NotEmpty
    @CreatedAt
    @Column
    createdAt!: Date;
    
    @AllowNull(false)
    @NotEmpty
    @UpdatedAt
    @Column
    updatedAt!: Date;
}