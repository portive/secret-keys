import { storeSecretKey, restoreSecretKey } from ".."

describe("secret keys", () => {
  it("should store and restore a secret key", async () => {
    const envKey = "yo0qWqCnTA8oF63BTNBxu"
    const secretKey = "mtqlhbF62my8jtxRLJRbu"
    const storedKey = storeSecretKey({ envKey, secretKey })

    const restoredKey = restoreSecretKey({ envKey, storedKey })
    expect(restoredKey).toEqual(secretKey)
  })
})
