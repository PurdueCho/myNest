import {IsNumber, IsOptional, IsString} from 'class-validator';
 
export class CreateMovieDTO {
    
    @IsString() // Code Validation in realtime
    readonly title: string;
    
    @IsNumber()
    readonly year: number;

    @IsOptional()
    @IsString({ each: true })
    readonly genres: string[];
}