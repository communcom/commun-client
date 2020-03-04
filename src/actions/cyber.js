import Basic from './basic';

export default class Cyber extends Basic {
  _contractAccount = 'cyber';
  _contractActions = [
    'bidname',
    'bidrefund',
    'canceldelay',
    'checkwin',
    'deleteauth',
    'linkauth',
    'newaccount',
    'onblock',
    'onerror',
    'providebw',
    'setabi',
    'setcode',
    'setparams',
    'setprods',
    'unlinkauth',
    'updateauth',
  ];
}
