import { Component } from '@angular/core';

@Component({
  selector: 'pr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title       = 'my First Angular';
  name        = ' Robert Garcia';
  age         = 17;
  name1       = '';
  surname1    = '';
  email       = 'hello@hello.com';
  wages       = [1700, 1900, 1500, 2000];
  active      = true;
  countClicks = 1;

isActive(): string {
    let answerMe = '';
    (this.active === true) ? answerMe = 'Worker working' : answerMe = 'Worker is NOT working';
    return answerMe;
  }

  lastWages(): number {

    let sumWages = 0;
    let x = 0;
    // iteration
    for (x; x < this.wages.length; x++){
      sumWages += this.wages[x];
      console.log(this.wages[x]);
    }
    /* for (x of this.wages){
      // place it in sumWages
      sumWages += x;
    } */
    // sumWages = this.wages.reduce((a, b) => a + b);
    console.log(sumWages);
    return sumWages;
  }

  addClicks(): void {
    this.countClicks++;
    console.log(this.countClicks);
  }
  restClicks(): void{
    this.countClicks--;
    console.log(this.countClicks);
  }

}
