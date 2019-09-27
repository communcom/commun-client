import Cyber from './CyberCommun';

export { default as CyberCommun } from './CyberCommun';
export * from './CyberCommun';

export default new Cyber({
  endpoint: process.env.CYBERWAY_HTTP_URL,
});
