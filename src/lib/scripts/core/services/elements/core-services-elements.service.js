"use strict";
exports.__esModule = true;
exports.ElementDragging = exports.ElementHighlight = exports.ElementSelector = exports.ElementRemove = void 0;
var core_services_date_service_1 = require("../date/core-services-date.service");
var Remove = (function () {
    function Remove() {
    }
    Remove.prototype.childElements = function (elementClassId) {
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
    return Remove;
}());
exports.ElementRemove = new Remove();
var Selector = (function () {
    function Selector() {
    }
    Selector.prototype.element = function (className) {
        return document.querySelector(className);
    };
    return Selector;
}());
exports.ElementSelector = new Selector();
var Highlight = (function () {
    function Highlight() {
    }
    Highlight.prototype.clearError = function (field) {
        if (typeof (field) === 'object') {
            field === null || field === void 0 ? void 0 : field.classList.remove('required-fill');
        }
        else {
            if (field != null) {
                var currentField = document.querySelector(field);
                if (currentField != null) {
                    currentField.classList.remove('required-fill');
                }
            }
        }
    };
    Highlight.prototype.error = function (fieldHighlighted) {
        if (fieldHighlighted != null) {
            fieldHighlighted.classList.add('required-fill');
            fieldHighlighted.focus();
        }
    };
    Highlight.prototype.invalidDate = function (date, input) {
        if (core_services_date_service_1.DateValidation.date(date)) {
            input.classList.remove('error-highlight');
        }
        else {
            input.classList.add('error-highlight');
        }
    };
    Highlight.prototype.setError = function (field) {
        if (field != null) {
            field.classList.add('required-fill');
            field.focus();
        }
    };
    return Highlight;
}());
exports.ElementHighlight = new Highlight();
var Dragging = (function () {
    function Dragging() {
    }
    Dragging.prototype.horizontal = function (slider) {
        var isDown = false;
        var startX;
        var scrollLeft;
        slider.addEventListener('mousedown', function (e) {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });
        slider.addEventListener('mouseleave', function () {
            isDown = false;
            slider.classList.remove('active');
        });
        slider.addEventListener('mouseup', function () {
            isDown = false;
            slider.classList.remove('active');
        });
        slider.addEventListener('mousemove', function (e) {
            if (!isDown) {
                return;
            }
            e.preventDefault();
            var x = e.pageX - slider.offsetLeft;
            var walk = (x - startX);
            slider.scrollLeft = scrollLeft - walk;
        });
    };
    return Dragging;
}());
exports.ElementDragging = new Dragging();
//# sourceMappingURL=core-services-elements.service.js.map