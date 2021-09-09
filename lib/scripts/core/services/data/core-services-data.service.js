class Converter {
    binaryStringToArrayBuffer(s) {
        const buffer = new ArrayBuffer(s.length);
        const view = new Uint8Array(buffer);
        for (let i = 0; i < s.length; i++) {
            view[i] = s.charCodeAt(i) & 0xFF;
        }
        return buffer;
    }
}
export const DataConversor = new Converter();
//# sourceMappingURL=core-services-data.service.js.map