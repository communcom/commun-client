import Basic from './basic';

export default class Ctrl extends Basic {
  _contractAccount = 'comn.point';
  _contractActions = [
    'setparams',
    'validateprms',
    'regwitness',
    'unregwitness',
    'startwitness',
    'stopwitness',
    'votewitness',
    'unvotewitn',
    'changepoints',
  ];
}
