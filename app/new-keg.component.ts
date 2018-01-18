import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template:`
    <h2>New Keg</h2>
    <label>Name of kombucha: <input #name> </label>
    <label>Brewer: <input #brewer> </label>
    <label>Flavor profile: <input #flavor> </label>
    <label>Has caffeine?
      <select #caffeine>
        <option [value]=true>Yes</option>
        <option [value]=false>No</option>
      </select>
    </label>
    <label>Sugar content (g/16oz): <input #sugar> </label>
    <label>Location of brewer: <input #location> </label>
    <label>Live culture count: <input #cultures> </label>
    <label>Pint price: <input #price> </label>
    <label>How many pints in the keg?: <input #inventory> </label>
    <button (click)="submitNewKeg(name.value, brewer.value, flavor.value, caffeine.value, sugar.value, location.value, cultures.value, price.value, inventory.value)">Submit new keg!</button>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  submitNewKeg(name: string, brewer: string, flavor: string, caffeine: boolean, sugar: number, location: string, cultures: number, price: number, inventory: number) {
    const newKegToAdd: Keg = new Keg(name, brewer, flavor, caffeine, sugar, location, cultures, price, inventory);
    this.newKegSender.emit(newKegToAdd);
  }
}
