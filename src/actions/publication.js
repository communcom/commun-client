import Basic from './basic';

export default class Publication extends Basic {
  _contractAccount = 'commun.publication';
  _contractActions = [
    'createmssg',
    'updatemssg',
    'settags',
    'deletemssg',
    'reportmssg',
    'upvote',
    'downvote',
    'unvote',
    'claim',
    'hold',
    'transfer',
    'setparams',
    'reblog',
    'erasereblog',
    'setproviders',
    'setfrequency',
    'provide',
    'advise',
    'slap',
  ];
}
