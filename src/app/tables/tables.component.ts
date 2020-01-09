import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { ServicesService, Services } from './services.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
    submitted = false;
    success = false;
    services: any;
    servicess: Services[];

   constructor(private servicee: ServicesService) { }
    ngOnInit() {

        this.servicee.getService().subscribe(data => {
          this.servicess = data;
        })
      }

      Delete(serv) {
        this.servicee.deleteService(serv)
          .subscribe(data => {
            this.servicess = this.servicess.filter(p => p !== serv);
            alert(" voulez vous supprimer ?");
          })
       
      }
  }
  