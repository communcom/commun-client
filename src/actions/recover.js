import Basic from './basic';

export default class Recover extends Basic {
  _contractAccount = 'c.recover';
  _contractActions = ['recover', 'applyowner', 'cancelowner'];
}
