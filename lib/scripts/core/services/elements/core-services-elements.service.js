"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Remove
 */
exports.removeChildElements = function (elementClassId) {
    if (typeof elementClassId === 'string') {
        var element = document.querySelector(elementClassId);
        if (element != null) {
            while (element.firstChild) {
                element.removeChild(element.firstChild);
            }
        }
    }
    else {
        while (elementClassId.firstChild) {
            elementClassId.removeChild(elementClassId.firstChild);
        }
    }
};
//# sourceMappingURL=core-services-elements.service.js.map