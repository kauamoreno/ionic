import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.page.html',
  styleUrls: ['./noticia.page.scss'],
})
export class NoticiaPage implements OnInit {
  titulo: string | null = '';
  noticia: string | null = '';
  img: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.titulo = this.route.snapshot.paramMap.get('titulo');
    this.img = this.route.snapshot.paramMap.get('img');
    const noticia = this.route.snapshot.paramMap.get('noticia');
    if (noticia !== null) {
      this.noticia = noticia;
    } else {
      this.noticia = 'Descrição não disponível';
    }
  }

  voltarPagina() {
    window.history.back();
  }

}
