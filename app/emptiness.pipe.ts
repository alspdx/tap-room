import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './keg.model';

@Pipe({
  name: "emptiness",
  pure: false
})

export class EmptinessPipe implements PipeTransform {
  transform(input: Keg[], howCloseToEmpty) {
    var output: Keg[] = [];
    if (howCloseToEmpty === 'underTenPints') {
      input.map(function(keg) {
        if(keg.pintsRemaining <= 10) {
          output.push(keg);
        }
      })
      return output;
    } else if (howCloseToEmpty === 'underTwentyFivePints') {
      input.map(function(keg) {
        if(keg.pintsRemaining <= 25) {
          output.push(keg)
        }
      })
      return output;
    } else {
      return input;
    }
  }
}
