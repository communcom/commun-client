import Basic from './basic';

export default class CyberMsig extends Basic {
  _contractAccount = 'cyber.msig';
  _contractActions = ['approve', 'cancel', 'exec', 'invalidate', 'propose', 'unapprove'];
}
