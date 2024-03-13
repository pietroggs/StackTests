import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ativo } from 'src/app/models/ativo.model';
import { AtivosService } from 'src/app/services/ativos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-ativo',
  templateUrl: './edit-ativo.component.html',
  styleUrls: ['./edit-ativo.component.css']
})
export class EditAtivoComponent implements OnInit {

  ativoDetails: Ativo = {
    id: '',
    nome: '',
    local: '',
    tipo: '',
    valor: 0
  }

  constructor(private route: ActivatedRoute, private ativoService: AtivosService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id')
        if (id) {
          this.ativoService.getAtivo(id).
            subscribe({
              next: (res) => {
                console.log(res)
                this.ativoDetails = res
              }
            })
        }
      }
    })
  }

  updateAtivo() {
    this.ativoService.updateAtivo(this.ativoDetails.id, this.ativoDetails).
    subscribe({
      next: (res) => {
        console.log(res)
        this.router.navigate(['ativos'])
      }
    })
  }

  deleteAtivo(id: string) {
    this.ativoService.deleteAtivo(id).
    subscribe({
      next: (res) => {
        console.log(res)
        this.router.navigate(['ativos'])
      }
    })
  }

}
