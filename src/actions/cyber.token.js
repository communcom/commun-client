import Basic from './basic';

export default class CyberToken extends Basic {
  _contractAccount = 'cyber.token';
  _contractActions = [
    'close',
    'create',
    'issue',
    'open',
    'retire',
    'bulktransfer',
    'bulkpayment',
    'transfer',
    'payment',
    'claim',
  ];
}
