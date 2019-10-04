import Basic from './basic';

export default class List extends Basic {
  _contractAccount = 'comn.list';
  _contractActions = ['create', 'setsysparams', 'setinfo'];
}
