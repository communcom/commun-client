import Basic from './basic';

export default class Gallery extends Basic {
  _contractAccount = 'commun.gallery';
  _contractActions = [
    'create',
    'createmosaic',
    'addtomosaic',
    'claim',
    'hold',
    'transfer',
    'provide',
    'advise',
    'slap',
  ];
}
