import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model'

@Component ({
  selector: 'edit-keg',
  template: `
    <div *ngIf="childSelectedKeg">
      <h3>Edit keg:</h3>
      <label>Name of kombucha: <input [(ngModel)]="childSelectedKeg.name"> </label>
      <label>Brewer: <input [(ngModel)]="childSelectedKeg.brewer"> </label>
      <label>Flavor profile: <input [(ngModel)]="childSelectedKeg.flavor"> </label>
      <label>Has caffeine?
        <select [(ngModel)]="childSelectedKeg.caffeine">
          <option [value]=true>Yes</option>
          <option [value]=false>No</option>
        </select>
      </label>
      <label>Sugar content (g/16oz): <input [(ngModel)]="childSelectedKeg.sugarContentInGrams"> </label>
      <label>Location of brewer: <input [(ngModel)]="childSelectedKeg.brewerLocation"> </label>
      <label>Live culture count: <input [(ngModel)]="childSelectedKeg.liveCultures"> </label>
      <label>Pint price: <input [(ngModel)]="childSelectedKeg.pintPrice"> </label>
      <label>How many pints in the keg?: <input [(ngModel)]="childSelectedKeg.pintsRemaining"> </label>
      <button (click)="doneEditButtonClicked()">Edit Complete</button>
    </div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() doneEditSender = new EventEmitter();

  doneEditButtonClicked() {
    this.doneEditSender.emit();
  }


}
