# rekurtz

Querying into unknown JSON structures can sometimes seem like a journey into a dark and foreboding jungle, 
along a murky, twisting river, surrounded by unknown dangerous creatures.

![THE HORROR](https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/4/30/1430388377739/4981d70b-3f3e-41df-a694-26567076a274-2060x1236.jpeg?w=620&q=55&auto=format&usm=12&fit=max&s=e20edab66c4a66c2066001526376b4e7)

What will you find? Maybe what you're looking for. Maybe something like...

```bash
> var foo = {bar: {baz: 'bang'}};
undefined
> foo.bar.baz.huh.boom
TypeError: Cannot read property 'boom' of undefined
    at repl:1:16
    at REPLServer.defaultEval (repl.js:262:27)
    at bound (domain.js:287:14)
    at REPLServer.runBound [as eval] (domain.js:300:12)
    at REPLServer.<anonymous> (repl.js:431:12)
    at emitOne (events.js:82:20)
    at REPLServer.emit (events.js:169:7)
    at REPLServer.Interface._onLine (readline.js:211:10)
    at REPLServer.Interface._line (readline.js:550:8)
    at REPLServer.Interface._ttyWrite (readline.js:827:14)
> 

```

Use `rekurtz` and you will get something more like this...

```bash
> var jaison = require('./')({bar: {baz: 'bang'}});
undefined
> jaison('bar.baz.huh.boom')
'no such key bar.baz.huh.boom'
> 
```

## API

```js
import rekurtz from 'rekurtz';

let j = rekurtz({some: {json: {structure: 'here'}}}[, 'some']);
console.log('structure'); //'here'
console.log('structure.heart.of.darkness') //'no such key structure.heart.of.darkness'
```