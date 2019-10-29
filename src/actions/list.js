import Basic from './basic';

export default class List extends Basic {
  _contractAccount = 'c.list';
  _contractActions = [
    'create',
    'setappparams',
    'setparams',
    'setinfo',
    'follow',
    'unfollow',
    'hide',
    'unhide',
    'ban',
    'unban',
  ];
}
