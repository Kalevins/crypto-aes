import CryptoJS from 'crypto-js'

// encrypter
export const encrypter = (value, key) => {
  const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(value), key).toString()
  return ciphertext
}

// unfolder
export const unfolder = (value, key) => {
  const bytes = CryptoJS.AES.decrypt(value, key)
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
}
