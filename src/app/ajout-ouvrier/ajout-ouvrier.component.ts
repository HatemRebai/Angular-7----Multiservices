import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { OuvrierService, Ouvrier } from './ouvrier.service';
import { ServicesService, Services } from '../tables/services.service'
@Component({
  selector: 'app-ajout-ouvrier',
  templateUrl: './ajout-ouvrier.component.html',
  styleUrls: ['./ajout-ouvrier.component.scss']
})
export class AjoutOuvrierComponent implements OnInit {

  submitted = false;
  success = false;
  ouvrier: any;
  ouvriers: Ouvrier[];
  services: any;
  servicess: Services[];


  messageForm = new FormGroup({
  username: new FormControl('', [Validators.required]),
  email: new FormControl('', [Validators.required]),
  adresse: new FormControl('', [Validators.required]),
  tel: new FormControl('', [Validators.required]),
  typedouvrier: new FormControl('', [Validators.required]),
  services: new FormControl('', [Validators.required]),

  })

  constructor(private service: OuvrierService, private serviceservice: ServicesService) { }

  ngOnInit() {
    this.Submit();
    }
    onSubmit() {
      this.submitted = true;
      if (this.messageForm.invalid) {
        return;
      }
      this.success = true;
      let services = this.messageForm.value.services;
    let niv = this.messageForm.value;
    delete niv['services'];
    console.log(niv);
    console.log(services);
      this.service.addOuvrier(niv, services).subscribe(
        data => {
          if (data) {
          }
        },
        err => {
          console.log('error sending data')
        },
        () => {
          alert('Confirmez?')
          console.log('data sent')
        }
      )
    }
    Submit() {
      this.serviceservice. getService().subscribe(data => {
        this.servicess = data
      })
    }
}

