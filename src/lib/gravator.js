import crypto from 'crypto';

/**
 * 文字列でアイコンを作成します
 */ 
export const generateGravatar = (string) => {
  const lowerCaseString = string.trim().toLowerCase();
  const md5 = crypto.createHash('md5');
  const digest = md5.update(lowerCaseString).digest('hex');
  return `https://www.gravatar.com/avatar/${digest}/?d=wavatar`;
}