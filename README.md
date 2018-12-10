# Typeof2

Very small and fast Javascript type acquisition method.

## Use

```bash
# install
npm install typeof2 --save
```

```javascript
const typeof2 = require("typeof2");

let print = obj=>{
        let o = typeof2(obj);
        console.log("type:",o.type,"name:",o.name);
    };

print(1);
// type: number name: Number

print("1");
// type: string name: String

print([]);
// type: array name: Array

print(new Date());
// type: date name: Date

print({});
// type: object name: Object

class Test{};
print(new Test());
// type: object name: Test

print(true);
// type: boolean name: Boolean

print(/ /);
// type: regexp name: RegExp

print(()=>{})
// type: function name:

print(function(){})
// type: function name:

print(function fun(){})
// type: function name: fun

let fun2 = ()=>{}
print(fun2)
// type: function name: fun2

print(undefined);
// type: undefined name: undefined

print(new Error("err"));
// type: error name: Error

print(new Buffer(0));
// type: uint8array name: Buffer

print(new Uint8Array(0));
// type: uint8array name: Uint8Array

print(new ArrayBuffer(0));
// type: arraybuffer name: ArrayBuffer

// ...
```

## License

MIT