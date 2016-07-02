import Rx from 'rxjs/Rx';
import Cycle from '@cycle/rxjs-run';
import {h1, makeDOMDriver} from '@cycle/dom';
//import {makeHistoryDriver} from '@cycle/history'
//import {createHistory} from 'history';
//import storageDriver from '@cycle/storage';

function main(sources) {
  return {
    DOM: Rx.Observable.of('CycleJS with RxJS5 works!')
           .map(txt => h1(txt))
  };
}

Cycle.run(main, {
  DOM: makeDOMDriver('#app')
});
