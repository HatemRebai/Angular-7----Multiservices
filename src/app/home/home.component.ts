import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { OuvrierService, Ouvrier } from './ouvrier.service';
import { Services } from 'app/tables/services.service';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  submitted = false;
  success = false;
  ouvrier: any;
  ouvriers: Ouvrier[];
  services: Services


  messageForm = new FormGroup({
  username: new FormControl('', [Validators.required]),
  email: new FormControl('', [Validators.required]),
  adresse: new FormControl('', [Validators.required]),
  tel: new FormControl('', [Validators.required]),
  typedouvrier: new FormControl('', [Validators.required]),
  Services: new FormControl('', [Validators.required]),

  })

  constructor(private service: OuvrierService) { }

  ngOnInit() {

      this.service.getOuvrier().subscribe(data => {
        this.ouvriers = data;
      })
    }

    Delete(ouvrier) {
      this.service.deleteOuvrier(ouvrier)
        .subscribe(data => {
          this.ouvriers = this.ouvriers.filter(p => p !== ouvrier);
          alert('voulez vous supprimer ?');
        })
    }
}
