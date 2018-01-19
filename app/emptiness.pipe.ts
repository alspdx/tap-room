import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './keg.model';

@Pipe({
  name: "emptiness",
  pure: false
})

export class EmptinessPipe implements PipeTransform {
  transform(input: Keg[], filterByName) {
    var output: Keg[] = [];
    if (filterByName) {
      input.map(function(keg) {
        const name = keg.name.toLowerCase();
        const filter = filterByName.toLowerCase();
        if(name.includes(filter)) {
          output.push(keg);
        }
      })
      return output;
    } else {
      return input;
    }
  }
}
