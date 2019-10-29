import Basic from './basic';

export default class Social extends Basic {
  _contractAccount = 'c.social';
  _contractActions = ['pin', 'unpin', 'block', 'unblock', 'updatemeta', 'deletemeta'];
}
