import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  noticias: any = []; // Array para armazenar as notícias

  constructor(private router: Router, private http: HttpClient) {} 

  ngOnInit() {
    this.http.get('../assets/db/noticias3.json').subscribe((data) => {
      this.noticias = data;
      console.log(data);
    });
  }

  redirecionaNoticia(titulo: string, noticia: string, img: string) {
    this.router.navigate(['/noticia', titulo, noticia, img]);
  }

}
