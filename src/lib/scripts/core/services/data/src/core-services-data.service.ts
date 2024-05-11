
class Converter {
  binaryStringToArrayBuffer(s: string): ArrayBuffer {
    const buffer = new ArrayBuffer(s.length); // convert string to arrayBuffer
    const view = new Uint8Array(buffer);  // create UInt8Array as viewer

    for (let i = 0; i < s.length; i++) {
      // eslint-disable-next-line no-bitwise
      view[i] = s.charCodeAt(i) & 0xFF; // convert to octet
    }

    return buffer;
  }
}


export const DataConverter = new Converter();
