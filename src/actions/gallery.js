import Basic from './basic';

export default class Gallery extends Basic {
  _contractAccount = 'comn.gallery';
  _contractActions = [
    'createmosaic',
    'addtomosaic',
    'claim',
    'hold',
    'transfer',
    'provide',
    'advise',
    'update',
    'lock',
    'unlock',
    'ban',
  ];
}
