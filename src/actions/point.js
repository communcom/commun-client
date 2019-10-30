import Basic from './basic';

export default class Point extends Basic {
  _contractAccount = 'c.point';
  _contractActions = ['close', 'create', 'setfreezer', 'issue', 'open', 'retire', 'transfer', 'withdraw'];
}
