import { Api, JsonRpc } from 'cyberwayjs';
import fetch from 'node-fetch'; // node only; not needed in browsers
import JsSignatureProvider from 'cyberwayjs/dist/eosjs-jssig';
import { TextEncoder, TextDecoder } from 'text-encoding'; // node only; native TextEncoder/Decoder

import { getKeyPairFromPrivateOrMaster } from './auth';

import Actions from './actions';

// Using like Symbol, prevents using this arg from outside library.
const lazyKey = {};

export default class CyberCommun {
  static createLazyInstance() {
    return new CyberCommun(lazyKey);
  }

  constructor(args) {
    if (args !== lazyKey) {
      this.configure(args);
    }
  }

  configure(args) {
    if (this._configured) {
      throw new Error('Already configured');
    }

    this.rpc = args.rpc || new JsonRpc(args.endpoint, { fetch });
    this.signatureProvider = null;

    for (const action of Object.keys(Actions)) {
      this[action] = new Actions[action]();
    }

    this._configured = true;
  }

  getActualAuth(accountName, privateKey, keyRole) {
    const normalizedName = accountName
      .trim()
      .toLowerCase()
      .replace(/@.*$/, '');

    privateKey = privateKey.trim();

    const keys = getKeyPairFromPrivateOrMaster(normalizedName, privateKey, keyRole);

    return {
      accountName: normalizedName,
      actualKey: keys.privateKey,
      publicKey: keys.publicKey,
    };
  }

  initProvider(privateKey) {
    this.initApi(new JsSignatureProvider(Array.isArray(privateKey) ? privateKey : [privateKey]));
  }

  initApi(signatureProvider) {
    this.signatureProvider = signatureProvider;
    this.api = new Api({
      rpc: this.rpc,
      signatureProvider: this.signatureProvider,
      textDecoder: new TextDecoder(),
      textEncoder: new TextEncoder(),
    });

    for (const action of Object.keys(Actions)) {
      this[action].setApi(this.api);
    }
  }
}
