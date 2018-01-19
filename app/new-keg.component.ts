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
        <option value="yes">Yes</option>
        <option value="">No</option>
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

  submitNewKeg(name: string, brewer: string, flavor: string, caffeine: string, sugar: string, location: string, cultures: string, price: string, inventory: string) {
    console.log(caffeine);
    const newKegToAdd: Keg = new Keg(name, brewer, flavor, (caffeine ? true : false), parseInt(sugar), location, parseInt(cultures), parseInt(price), parseInt(inventory));
    console.log(newKegToAdd);
    this.newKegSender.emit(newKegToAdd);
  }
}
