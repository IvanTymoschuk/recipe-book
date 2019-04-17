import { Component , OnInit} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-microelement',
  templateUrl: './microelement.component.html',
  styleUrls: ['./microelement.component.css']
})
export class MicroElementComponent implements OnInit {
    
    MicroElements: any;
    allIngredients: Observable<Worker[]>;
    constructor( private wS: WorkersService) { }
    ngOnInit() {

    }
    loadAllIngredients() {
        this.allIngredients = this.wS.getAllWorkers();
      }
}
