import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SelectedBvnService } from '../../../core/services/selected-bvn.service'

@Component({
  selector: 'app-bovine-selected',
  templateUrl: './bovine-selected.component.html',
  styleUrls: ['./bovine-selected.component.scss']
})
export class BovineSelectedComponent implements OnInit {

  group: boolean;
  title: string;
  seleccionado: string;

  constructor(private service: SelectedBvnService) { }

  ngOnInit() {
    
      
    
    
    if(this.group == null){
      this.title = "Bovinos seleccionados"
      this.seleccionado = "Numero de bovinos"
    }
    else{
      this.title = "Grupo seleccionado"
      this.seleccionado = "Nombre del grupo"
    }
  }

  goToView() {
  }

}
