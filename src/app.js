import Rx from 'rxjs/Rx';
import Cycle from '@cycle/rxjs-run';
import {h1, div, hr, span, makeDOMDriver} from '@cycle/dom';
//import {makeHistoryDriver} from '@cycle/history'
//import {createHistory} from 'history';
//import storageDriver from '@cycle/storage';

function main(sources) {
  const clicks$ = sources.DOM.select('#app').events('click')
    .map(ev => 1)
    .startWith(0)
    .scan((total, curr) => total + curr);

  return {
    DOM: clicks$
           .map(total =>
                   div([
                       h1('CycleJS with RxJS5 works!'),
                       hr(),
                       span(`${total} times clicked!`)
                    ]))
  };
}

Cycle.run(main, {
  DOM: makeDOMDriver('#app')
});
