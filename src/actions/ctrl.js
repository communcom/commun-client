import Basic from './basic';

export default class Ctrl extends Basic {
  _contractAccount = 'c.ctrl';
  _contractActions = [
    'init',
    'regleader',
    'unregleader',
    'startleader',
    'stopleader',
    'voteleader',
    'unvotelead',
    'claim',
    'changepoints',
    'approve',
    'cancel',
    'exec',
    'invalidate',
    'propose',
    'unapprove',
  ];
}
