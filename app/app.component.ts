import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
  <div class='container'>
    <h1>Kom-Bu-Bu</h1>
    <div *ngFor="let thisKeg of kegs">
      <h3>{{thisKeg.name}}</h3>
      <p>Brewed by {{thisKeg.brewer}} in {{thisKeg.brewerLocation}}</p>
      <p>Notes of {{thisKeg.flavor}}</p>
      <p class='caffeine' *ngIf='thisKeg.caffeine'>This Kombucha is caffeinated</p>
      <p>{{thisKeg.sugarContentInGrams}}g of sugar and {{thisKeg.liveCultures}} live cultures per pint</p>
      <h5>\${{thisKeg.pintPrice}} per pint</h5>
      <p>{{thisKeg.pintsRemaining}} pints remaining</p>
    </div>
    <div>
      <form [formGroup]='kegInput' (ngSubmit)='doSubmit($event)'>
        <input formControlName="name" type="text" placeholder="Keg Name">
        <input formControlName="brewery" type="text" placeholder="Brewery">
        <button type="submit">Submit new keg!</button>
      </form>
    </div>
  </div>
  `
})

export class AppComponent {
  kegs: Keg[] = [
    new Keg('Love', 'Brew Dr.', 'Lavender, Jasmine, Rose', false, 10, 'Portland, OR', 1000000000, 5, 87),
    new Keg('Trilogy', 'GT\'S', 'Ginger, Lemon, Strawberry', false, 15, 'Beverly Hills, CA', 2000000000, 6, 24),
    new Keg('Master Brew', 'Kevita', 'Blueberry Basil', true, 14, 'Oxnard, CA', 2000000, 5.5, 124),
    new Keg('Amrita Chai', 'Tealixir', 'Ginger, Cardamom, Vanilla Bean, Black Tea', true, 10, 'Nashville, TN', 5000000, 5, 9),
    new Keg('Simply Nature', 'Ucha Kombucha', 'Ginger', false, 13, 'London, UK', 1000000, 7, 11)
  ];

  // newKeg() {
  //
  // }
}

export class Keg {
  constructor(
    public name: string,
    public brewer: string,
    public flavor: string,
    public caffeine: boolean,
    public sugarContentInGrams: number,
    public brewerLocation: string,
    public liveCultures: number,
    public pintPrice: number,
    public pintsRemaining: number
  ){}
}

export class NewKegInput {
  public kegInput = new FormGroup({
    name: new FormControl('', Validators.required),
    brewer: new FormControl('', Validators.required)
  });
  constructor(public fb: FormBuilder) {}
  doSubmit(event) {
    console.log(event);
    console.log(this.kegInput.value);
  }
}
