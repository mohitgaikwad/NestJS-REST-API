import { IsEmail, IsNotEmpty, IsNumber, IsString, IsEmpty, Length, IsDefined, IsMobilePhone } from "class-validator";

export class CreateItemDto {
    @IsString()
    @IsNotEmpty()
    @IsDefined()
    name: string;
    

    @IsEmail()
    @IsString()
    @IsNotEmpty()
    @IsDefined()
    email: string;
    
    @IsString()
    @IsNotEmpty()
    @IsDefined()
    password: string;
    
    export class UpdateItemDto {
        @IsString()
        @IsEmpty()
        id: string;
    
        @IsString()
        @IsNotEmpty()
        @IsDefined()
        name: string;
    
        @IsEmail()
        @IsString()
        @IsNotEmpty()
        @IsDefined()
        email: string;
        
        @IsString()
        @Length(10, 10)
        @IsMobilePhone()
        phoneno: string;
    
        @IsString()
        address: string;
    
        @IsString()
        profile_photo: string;
    }