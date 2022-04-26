import { AES, enc } from "crypto-js"

/**
 * Takes a key stored in the `env` and the `secretKey` that we want to store
 * in the database then returns the `storedKey` to put into the database.
 */
export function storeSecretKey({
  envKey,
  secretKey,
}: {
  envKey: string
  secretKey: string
}): string {
  return AES.encrypt(secretKey, envKey).toString()
}

/**
 * Takes a key stored in the `env` and the `storedKey` in the database then
 * returns the encrypted `secretKey` that we use to encrypt things like the
 * JWT token.
 */
export function restoreSecretKey({
  envKey,
  storedKey,
}: {
  envKey: string
  storedKey: string
}) {
  return AES.decrypt(storedKey, envKey).toString(enc.Utf8)
}
