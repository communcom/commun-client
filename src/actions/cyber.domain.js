import Basic from './basic';

export default class CyberDomain extends Basic {
  _contractAccount = 'cyber.domain';
  _contractActions = [
    'biddomain',
    'biddmrefund',
    'newdomain',
    'checkwin',
    'declarenames',
    'passdomain',
    'linkdomain',
    'unlinkdomain',
    'newusername',
  ];
}
