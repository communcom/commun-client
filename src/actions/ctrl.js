import Basic from './basic';

export default class Ctrl extends Basic {
  _contractAccount = 'commun.ctrl';
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

  defaults = {
    max_witnesses: 5,
    multisig_perms: {
      super_majority: 0,
      majority: 0,
      minority: 0,
    },
    max_witness_votes: 30,
  };
}
