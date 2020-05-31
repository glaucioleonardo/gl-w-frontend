/**
 * Remove
 */
export const removeChildElements = (elementClassId: string | HTMLElement) => {
    if (typeof elementClassId === 'string') {
        const element = document.querySelector(elementClassId);
        if (element != null) {
            while (element.firstChild) {
                element.removeChild(element.firstChild);
            }
        }
    } else {
        while (elementClassId.firstChild) {
            elementClassId.removeChild(elementClassId.firstChild);
        }
    }
};
