import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class='container'>
    <h1>Kom-Bu-Bu</h1>
    <keg-list [childKegList]='masterKegList' (editKegSender)="editKeg($event)"></keg-list>
    <new-keg (newKegSender)="addKeg($event)"></new-keg>
    <edit-keg [childSelectedKeg]="selectedKeg" (doneEditSender)="stopKegEdit()"></edit-keg>


  </div>
  `
})

export class AppComponent {
  masterKegList: Keg[] = [
    new Keg('Love', 'Brew Dr.', 'Lavender, Jasmine, Rose', false, 10, 'Portland, OR', 1000000000, 5, 87),
    new Keg('Trilogy', 'GT\'S', 'Ginger, Lemon, Strawberry', false, 15, 'Beverly Hills, CA', 2000000000, 6, 24),
    new Keg('Master Brew', 'Kevita', 'Blueberry Basil', true, 14, 'Oxnard, CA', 2000000, 5.5, 124),
    new Keg('Amrita Chai', 'Tealixir', 'Ginger, Cardamom, Vanilla Bean, Black Tea', true, 10, 'Nashville, TN', 5000000, 5, 9),
    new Keg('Simply Nature', 'Ucha Kombucha', 'Ginger', false, 13, 'London, UK', 1000000, 7, 11)
  ];

  selectedKeg = null;

  addKeg(sentKeg) {
    this.masterKegList.push(sentKeg);
  }

  editKeg(kegToEdit){
    this.selectedKeg = kegToEdit;
  }

  stopKegEdit(){
    this.selectedKeg = null;
  }
}
