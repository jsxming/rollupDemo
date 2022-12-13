import foo from './foo';
import json from '../package.json';

export default function () {
  console.log(json.version)
  console.log(foo);
}