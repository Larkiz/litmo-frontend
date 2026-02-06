export const cipherUtil = {
  encryptMessage: async (text: string, cryptoKey: CryptoKey) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);

    const iv = crypto.getRandomValues(new Uint8Array(12));

    const encryptedContent = await crypto.subtle.encrypt(
      { name: "AES-GCM", iv: iv },
      cryptoKey,
      data,
    );

    const combined = new Uint8Array(iv.length + encryptedContent.byteLength);
    combined.set(iv);
    combined.set(new Uint8Array(encryptedContent), iv.length);

    return btoa(String.fromCharCode(...combined));
  },
  decryptMessage: async (
    base64Data: string,
    rawKey: Uint8Array<ArrayBuffer>,
  ) => {
    const combined = Buffer.from(base64Data, "base64");

    // Извлекаем IV (первые 12 байт) и контент
    const iv = combined.slice(0, 12);
    const ciphertext: any = combined.slice(12, combined.length - 16);
    const authTag = combined.slice(combined.length - 16); // Тег аутентификации (последние 16 байт)

    const decipher = crypto.createDecipheriv("aes-256-gcm", rawKey, iv);
    decipher.setAuthTag(authTag);

    let decrypted = decipher.update(ciphertext, "binary", "utf8");
    decrypted += decipher.final("utf8");

    return decrypted;
  },
};
