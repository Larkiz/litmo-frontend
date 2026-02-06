export const keyUtil = {
  generateAesKey: async () => {
    try {
      const key = await crypto.subtle.generateKey(
        {
          name: "AES-GCM",
          length: 256,
        },
        true,
        ["encrypt", "decrypt"],
      );

      return key;
    } catch (err) {
      console.error("Error generating key:", err);
    }
  },
  exportKey: async (cryptoKey: CryptoKey) => {
    return crypto.subtle.exportKey("raw", cryptoKey);
  },
  keyToB64: async (rawKey: Uint8Array<ArrayBuffer>) => {
    return btoa(String.fromCharCode(...new Uint8Array(rawKey)));
  },
  importKey: async (
    key: string | Uint8Array<ArrayBuffer>,
    type = "cryptoKey",
  ) => {
    let bytes: any = key;
    if (type === "base64" && typeof key === "string") {
      const binaryString = atob(key);
      bytes = new Uint8Array(binaryString.length);
      for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
    }
    const restoredKey = await crypto.subtle.importKey(
      "raw",
      bytes,
      "AES-GCM",
      true,
      ["encrypt", "decrypt"],
    );

    // return crypto.subtle.exportKey("raw", restoredKey);
    return restoredKey;
  },
};
