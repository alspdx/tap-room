import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class='container'>
    <h1>Kom-Bu-Bu</h1>
    <div *ngFor="let thisKeg of masterKegList">
      <h3>{{thisKeg.name}}</h3>
      <p>Brewed by {{thisKeg.brewer}} in {{thisKeg.brewerLocation}}</p>
      <p>Notes of {{thisKeg.flavor}}</p>
      <p class='caffeine' *ngIf='thisKeg.caffeine'>This Kombucha is caffeinated</p>
      <p>{{thisKeg.sugarContentInGrams}}g of sugar and {{thisKeg.liveCultures}} live cultures per pint</p>
      <h5>\${{thisKeg.pintPrice}} per pint</h5>
      <p>{{thisKeg.pintsRemaining}} pints remaining</p>
    </div>
    <new-keg (newKegSender)="addKeg($event)"></new-keg>
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

  addKeg(sentKeg) {
    this.masterKegList.push(sentKeg);
  }
}
