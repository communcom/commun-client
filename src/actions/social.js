import Basic from './basic';

export default class Social extends Basic {
  _contractAccount = 'commun.social';
  _contractActions = ['pin', 'unpin', 'block', 'unblock', 'updatemeta', 'deletemeta'];
}
