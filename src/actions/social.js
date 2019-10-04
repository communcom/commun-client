import Basic from './basic';

export default class Social extends Basic {
  _contractAccount = 'comn.social';
  _contractActions = ['pin', 'unpin', 'block', 'unblock', 'updatemeta', 'deletemeta'];
}
