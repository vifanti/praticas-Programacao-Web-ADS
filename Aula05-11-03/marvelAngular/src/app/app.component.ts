import { Component, OnInit } from '@angular/core';
import { HeroService } from '../app/hero-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'marvelAngular';
  isLoadingResults = true;
  dados: any;
  constructor(private api: HeroService) { }


  ngOnInit() {
    this.api.getHeros()
    .subscribe(dados => {
      this.dados = dados.data.results;
      console.log(this.dados);
  }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }


}
