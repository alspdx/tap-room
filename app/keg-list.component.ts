import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model'

@Component({
  selector: 'keg-list',
  template:`
    <select (change)="optionChange($event.target.value)">
      <option value="allKegs">All Kegs</option>
      <option value="underTwentyFivePints">Kegs with 25 or less pints</option>
      <option value="underTenPints">Kegs with 10 or less pints</option>
    </select>

    <div *ngFor="let thisKeg of childKegList | emptiness:filterByRemaining">
      <h3>{{thisKeg.name}}</h3>
      <p>Brewed by {{thisKeg.brewer}} in {{thisKeg.brewerLocation}}</p>
      <p>Notes of {{thisKeg.flavor}}</p>
      <p class='caffeine' *ngIf='thisKeg.caffeine'>This Kombucha is caffeinated</p>
      <p>{{thisKeg.sugarContentInGrams}}g of sugar and {{thisKeg.liveCultures}} live cultures per pint</p>
      <h5>\${{thisKeg.pintPrice}} per pint</h5>
      <p>{{thisKeg.pintsRemaining}} pints remaining</p>
      <button (click)="editKegButton(thisKeg)">Edit keg</button>
      <button (click)='pintsMinusOne(thisKeg)'>Sold one!</button>
    </div>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() editKegSender = new EventEmitter();

  filterByRemaining: string = "allKegs";

  editKegButton(kegToEdit){
    this.editKegSender.emit(kegToEdit);
  }

  pintsMinusOne(keg) {
    keg.pintsRemaining -= 1;
  }

  optionChange(option) {
    this.filterByRemaining = option;
  }
}
