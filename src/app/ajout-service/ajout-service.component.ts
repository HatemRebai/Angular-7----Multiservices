import { Component, OnInit } from '@angular/core';
import {ServiceService, Services } from './service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-ajout-service',
  templateUrl: './ajout-service.component.html',
  styleUrls: ['./ajout-service.component.scss']
})
export class AjoutServiceComponent implements OnInit {
  submitted = false;
  success = false;
  services: Services[];
  messageForm = new FormGroup({
  titre: new FormControl('', [Validators.required]),
  description: new FormControl('', [Validators.required]),
  })
  constructor(private service: ServiceService) { }


  ngOnInit() {
  }
  onSubmit() {
    this.submitted = true;
    if (this.messageForm.invalid) {
      return;
    }
    this.success = true;
    this.service.addClient(this.messageForm.value).subscribe(
      data => {
        if (data) {
        }},
      err => {
        console.log('error sending data')
      },
      () => {
        alert('Confirmez?')
        console.log('data sent')
      }
    )
  }
}

