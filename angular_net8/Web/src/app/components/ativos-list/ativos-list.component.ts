import { Component, OnInit } from '@angular/core';
import { Ativo } from 'src/app/models/ativo.model';
import { AtivosService } from 'src/app/services/ativos.service';

@Component({
  selector: 'app-ativos-list',
  templateUrl: './ativos-list.component.html',
  styleUrls: ['./ativos-list.component.css']
})
export class AtivosListComponent implements OnInit {
  ativos: Ativo[] = []
  constructor(private ativosService: AtivosService) { }

  ngOnInit(): void {
    this.ativosService.getAllAtivos().subscribe({
      next: (ativos) =>{
        // console.log(ativos)
        this.ativos = ativos;
      },
      error: (res)=>{
        console.log(res)
      }
    })
  }

}
