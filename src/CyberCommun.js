import { Api, JsonRpc } from 'cyberwayjs';
import fetch from 'node-fetch'; // node only; not needed in browsers
import JsSignatureProvider from 'cyberwayjs/dist/eosjs-jssig';

import { getKeyPairFromPrivateOrMaster, getKeyPairByPermissionName, normalizeUserId } from './auth';

import Actions from './actions';

// Using like Symbol, prevents using this arg from outside library.
const lazyKey = {};

export default class CyberCommun {
  static createLazyInstance() {
    return new CyberCommun(lazyKey);
  }

  constructor(args) {
    this.isConfigured = false;
    this.signatureProvider = null;

    if (args !== lazyKey) {
      this.configure(args);
    }
  }

  configure(args) {
    this.rpc = args.rpc || new JsonRpc(args.endpoint, { fetch });

    // https://github.com/GolosChain/cyberwayjs#commonjs
    this.textEncoder = args.textEncoder;
    this.textDecoder = args.textDecoder;

    for (const action of Object.keys(Actions)) {
      this[action] = new Actions[action]();
    }

    this.isConfigured = true;
  }

  getActualAuth(userId, privateKey, keyRole) {
    const normalizedUserId = normalizeUserId(userId);

    privateKey = privateKey.trim();

    const keyPair = getKeyPairFromPrivateOrMaster(normalizedUserId, privateKey, keyRole);

    return {
      userId: normalizedUserId,
      ...keyPair,
    };
  }

  extractKeyPair(userId, password, keyRole) {
    return getKeyPairByPermissionName(userId, password, keyRole);
  }

  initProvider(privateKey) {
    this.initApi(new JsSignatureProvider(Array.isArray(privateKey) ? privateKey : [privateKey]));
  }

  initApi(signatureProvider) {
    this.signatureProvider = signatureProvider;
    this.api = new Api({
      rpc: this.rpc,
      signatureProvider: this.signatureProvider,
      textEncoder: this.textEncoder,
      textDecoder: this.textDecoder,
    });

    for (const action of Object.keys(Actions)) {
      this[action].setApi(this.api);
    }
  }
}
