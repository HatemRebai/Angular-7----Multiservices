import { Component, OnInit } from '@angular/core';
import { Services } from './serviice.service';
import { OuvrierService, Ouvrier } from '../home/ouvrier.service';
import { Reservation, ReservationService } from './reserservice.service';
import { Client } from 'app/user/client.service';




@Component({
  selector: 'app-reserservice',
  templateUrl: './reserservice.component.html',
  styleUrls: ['./reserservice.component.scss']
})
export class ReserserviceComponent implements OnInit {

submitted = false;
success = false;
ouvrier: Ouvrier[];
reservation: Reservation[];
services: Services[];
initial: Reservation[];
encours: Reservation[];
terminer: Reservation[];
client: Client[]
ouvriers: any
buttonDisabled: boolean [] = [];
Activate: boolean
selectedValue: String
Option: ( defaultSelected?: false ) => HTMLOptionElement
token: any;
value: number;
text: string;

 constructor(private serviceouvrier: OuvrierService, private reservations: ReservationService) { }

  ngOnInit() {
   this.listOuvrier();
   this.listeInitial()
   this.listeEncours()
   this.listeTerminer()

   }
 listOuvrier() {
  this.serviceouvrier.getAvailable().subscribe( res => {
    this.ouvriers = res;
  })
 }
 listeInitial() {
  this.reservations.getInitial().subscribe(res => {
    this.initial = res;
   })
 }
 listeEncours() {
  this.reservations.getencours().subscribe(res => {
    this.encours = res;
   })
 }
 listeTerminer() {
  this.reservations.getterminer().subscribe(res => {
    this.terminer = res;
   })
 }
   set(id: number) {
     const e = document.getElementById('select');
     const option = e['options']
     this.value = option[e['selectedIndex']].value;
     // this.value = e.options[e.selectedIndex].value;

    this.reservations.setEtatReservation(id).subscribe((data: any) => {
    this.ouvriers = data ;
        })
    this.reservations.affectOuvrier(id, this.value).subscribe((res: any) => {
    this.ouvriers = res ;
       })
    this.serviceouvrier.setAvailable(this.value).subscribe((res: any) => {
    this.ouvriers = res ;
    })
 }
   onChange(index: number) {
    const e = document.getElementById('select');
    const option = e['options']
    this.text = option[e['selectedIndex']].text;
    // this.text = e.options[e.selectedIndex].text;
    if (Option && this.text !== '') {
     this.buttonDisabled[index] = true
    } else {
      this.buttonDisabled[index] = false
    }
     return this.buttonDisabled[index];
     }
    // Delete(serv) {
    //   this.service.deleteService(serv)
    //     .subscribe(data => {
    //       this.services = this.services.filter(p => p !== serv);
    //       alert(' voulez vous supprimer ?');
    //     })
    // }
  onbegin(index: number) {
   this.reservation[index].etat = 'encours'
   this.ouvriers[index].available = false;
   this.buttonDisabled[index] = false
   this.Activate = true
}
  onfinis(id: number) {
    this.reservations.setetatterminer(id).subscribe((res: any) =>  {
      this.ouvriers = res;
    })

  // this.services[index].etat = 'terminer'
  this.buttonDisabled[id] = false
}
setAvailable(id: number) {
  this.serviceouvrier.setAvailable(id).subscribe((res: any) => {
    this.ouvriers = res ;
    })
}

}
