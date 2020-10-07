export const base64Decode = (apikey: string) => {
  return Buffer.from(apikey, 'base64').toString('utf-8');
}

export const getTimestamp = () => {
  return new Date().toISOString();
}

export const logLine = (msg: string) => {
  console.log(`[${getTimestamp()}] ${msg}`)
}
