import { shareLatest } from "@react-rxjs/core";
import { interval, Observable, share, take } from "rxjs";

const first5Numbers = new Observable((obs) => {
  console.log("Hello");
  for (let i = 0; i < 5; i++) {
    obs.next(i);
  }
  obs.complete();
});

first5Numbers.subscribe((n) => {
  console.log(n);
});

first5Numbers.subscribe((n) => {
  console.log(`The number is ${n}`);
});

const first5SpaceNumbers = interval(1000).pipe(take(5), share());

first5SpaceNumbers.subscribe((v) => console.log("A", v));

setTimeout(() => {
  first5SpaceNumbers.subscribe((v) => console.log("B", v));
}, 2000);
