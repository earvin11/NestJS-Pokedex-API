import { IsInt, IsPositive, IsString, MinLength, Min } from 'class-validator';

// Dto son validdores de la request
export class CreatePokemonDto {
    
    @IsInt()
    @IsPositive()
    @Min(1)
    no: number;

    @IsString()
    @MinLength(1)
    name: string;

}
