import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { SWITCH_ELEMENT_REF_FACTORY__POST_R3__ } from '@angular/core/src/linker/element_ref';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  movies = [{title: 'test'}];
  selectedMovie;

  constructor(private api: ApiService) {
    this.getAllMovies();
    this.selectedMovie = {id: -1, title: '', description:'', year: 0 }
  }
  getAllMovies = () => {
    this.api.getAllMovies().subscribe(
      data => {
          this.movies = data;
      },
      error => {
        console.log(error)
      }
    );
    }
    movieClicked = (movie) => {
      this.api.getOneMovie(movie.id).subscribe(
        data => {
          this.selectedMovie  = data;
        },
        error => {
          console.log(error)
        }
    );
  }
  updateMovie = () => {
    this.api.updateMovies(this.selectedMovie).subscribe(
      data => {
        this.getAllMovies();
      },
      error => {
        console.log(error)
      }
  );
  }
  createMovie = () => {
    this.api.createMovie(this.selectedMovie).subscribe(
      data => {
        this.movies.push(data);
      },
      error => {
        console.log(error)
      }
  );
}
deleteMovie = () => {
  this.api.deleteMovie(this.selectedMovie.id).subscribe(
    data => {
      this.getAllMovies();
    },
    error => {
      console.log(error)
    }
);
}
}
