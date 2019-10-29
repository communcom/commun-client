import Basic from './basic';

export default class Publication extends Basic {
  _contractAccount = 'c.gallery';
  _contractActions = [
    'create',
    'update',
    'settags',
    'remove',
    'report',
    'lock',
    'unlock',
    'upvote',
    'downvote',
    'unvote',
    'claim',
    'hold',
    'transfer',
    'reblog',
    'erasereblog',
    'setproviders',
    'provide',
    'advise',
    'ban',
  ];
}
