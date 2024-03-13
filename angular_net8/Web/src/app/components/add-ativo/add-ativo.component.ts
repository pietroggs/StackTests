import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ativo } from 'src/app/models/ativo.model';
import { AtivosService } from 'src/app/services/ativos.service';

@Component({
  selector: 'app-add-ativo',
  templateUrl: './add-ativo.component.html',
  styleUrls: ['./add-ativo.component.css']
})
export class AddAtivoComponent implements OnInit {

  addAtivoRequest: Ativo = {
    id: '',
    nome: '',
    local: '',
    tipo: '',
    valor: 0
  };

  constructor(private ativoService: AtivosService, private router: Router) { }

  ngOnInit(): void {
  }

  addAtivo(addAtivoRequest: Ativo) {
    this.ativoService.addAtivo(this.addAtivoRequest)
    .subscribe({
      next: (ativo) => {
        console.log(ativo)
        this.router.navigate(['ativos'])
      },
      error: (res) => {
        console.log(res)
      }
    })
  }

}
