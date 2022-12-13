import foo from './foo';
import json from '../package.json';

export default function () {
  // import('./import').then((r) => {
  //   console.log(r.default)
  // }).catch((err) => {
  //   // 
  // });
  console.log(json.version)
  console.log(foo);
}