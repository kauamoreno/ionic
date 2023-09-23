import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'; // Importe o HttpClient

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  noticias: any = []; // Array para armazenar as notícias

  constructor(private router: Router, private http: HttpClient) {} 

  ngOnInit() {
    this.http.get('../assets/db/noticias1.json').subscribe((data) => {
      this.noticias = data;
      console.log(data);
    });
  }

  redirecionaNoticia(titulo: string, noticia: string, img: string) {
    this.router.navigate(['/noticia', titulo, noticia, img]);
  }
}
