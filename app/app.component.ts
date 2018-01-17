import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class='container'>
    <h1>Hello World</h1>
  </div>
  `
})

export class AppComponent {
  kegs: Keg[] = [
    new Keg('Love', 'Brew Dr.', 'Lavender, Jasmine, Rose', false, 10, 'Portland, OR', 1000000000),
    new Keg('Trilogy', 'GT\'S', 'Ginger, Lemon, Strawberry', false, 15, 'Beverly Hills, CA', 2000000000),
    new Keg('Master Brew', 'Kevita', 'Blueberry Basil', true, 14, 'Oxnard, CA', 2000000),
    new Keg('Amrita Chai', 'Tealixir', 'Ginger, Cardamom, Vanilla Bean, Black Tea', true, 10, 'Nashville, TN', 5000000),
    new Keg('Simply Nature', 'Ucha Kombucha', 'Ginger', false, 13, 'London, UK', 1000000)
  ]
}



export class Keg {
  constructor(
    public name: string,
    public brewer: string,
    public flavor: string,
    public caffine: boolean,
    public sugarContentInGrams: number,
    public brewerLocation: string,
    public liveCultures: number,

  ){}
}
