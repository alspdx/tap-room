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
