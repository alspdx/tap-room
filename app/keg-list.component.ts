import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model'

@Component({
  selector: 'keg-list',
  template:`
    <input (keyup)="optionChange($event.target.value)">


    <div *ngFor="let thisKeg of childKegList | emptiness:filterByName">
      <h3>{{thisKeg.name}}</h3>
      <p>Brewed by {{thisKeg.brewer}} in {{thisKeg.brewerLocation}}</p>
      <p>Notes of {{thisKeg.flavor}}</p>
      <p class='caffeine' *ngIf='thisKeg.caffeine'>This Kombucha is caffeinated</p>
      <p>{{thisKeg.sugarContentInGrams}}g of sugar and {{thisKeg.liveCultures}} live cultures per pint</p>
      <h5>\${{thisKeg.pintPrice}} per pint</h5>
      <p>{{thisKeg.pintsRemaining}} pints remaining</p>
      <button (click)="editKegButton(thisKeg)">Edit keg</button>
      <button (click)='pintsMinus(thisKeg, 1)'>Pint Sale</button>
      <button (click)='pintsMinus(thisKeg, 2)'>Small Growler Sale</button>
      <button (click)='pintsMinus(thisKeg, 4)'>Large Growler Sale</button>
    </div>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() editKegSender = new EventEmitter();

  filterByName: string = "";

  editKegButton(kegToEdit){
    this.editKegSender.emit(kegToEdit);
  }

  pintsMinus(keg, size) {
    keg.pintsRemaining -= size;
  }

  optionChange(option) {
    this.filterByName = option;
  }
}
