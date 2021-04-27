import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, Res, Req } from '@nestjs/common';
import { Movie } from './entities/movie.entitiy';
import { MoviesService } from './movies.service';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { UpdateMovieDTO } from './dto/update-movie.dto';

// router 
@Controller('movies')
export class MoviesController {

    constructor(private readonly moviesService: MoviesService) {

    };

    // @Param 과 url 같아야함
    // If you want something, you need to ask for
    @Get()
    getAll(): Movie[] {   // Express obj available ex) @Req() req, @Res() res , but not recommended
        return this.moviesService.getAll();
    }

    @Get("/:id")                             
    getOne(@Param('id') movieId: number): Movie {  
        return this.moviesService.getOne(movieId);
    }

    @Post()
    create(@Body() movieData: CreateMovieDTO) {
        return this.moviesService.create(movieData);
    }

    @Delete("/:id")
    remove(@Param('id') movieId:number) {
        return this.moviesService.deleteOne(movieId);
    }

    @Patch('/:id')
    patch(@Param('id') movieId:number, @Body() updateData: UpdateMovieDTO) {
        return this.moviesService.update(movieId, updateData);
    }

    

}

