"use strict";
exports.__esModule = true;
exports.ComboBoxDom = exports.ComboBoxData = exports.ComboBoxCore = void 0;
var core_services_elements_service_1 = require("../elements/core-services-elements.service");
var Core = (function () {
    function Core() {
    }
    Core.prototype.loadData = function (combobox, data, keepValue) {
        return new Promise(function (resolve) {
            var parent = combobox.parentNode;
            if (parent != null) {
                var comboboxInput = parent.querySelector('input.custom-combobox-input');
                core_services_elements_service_1.ElementRemove.childElements(combobox);
                if (!keepValue) {
                    combobox.value = '';
                    comboboxInput.value = '';
                }
                var emptyOption = document.createElement('option');
                emptyOption.value = '';
                combobox.appendChild(emptyOption);
                data.forEach(function (d) {
                    var option = document.createElement('option');
                    option.value = d.value;
                    option.innerText = d.text;
                    combobox.appendChild(option);
                });
                resolve(combobox);
            }
            else {
                console.error('Parent of current combobox is null');
                resolve(null);
            }
        });
    };
    return Core;
}());
exports.ComboBoxCore = new Core();
var Data = (function () {
    function Data() {
    }
    Data.prototype.byValue = function (arrayData, value) {
        var tempActionPlan = arrayData.filter(function (x) { return x.value === value; });
        if (value == null || tempActionPlan.length === 0) {
            return '';
        }
        else {
            return tempActionPlan[0].text;
        }
    };
    return Data;
}());
exports.ComboBoxData = new Data();
var Dom = (function () {
    function Dom() {
    }
    Dom.prototype.disableInput = function (combobox, disable) {
        var parent = combobox.parentNode;
        var input = parent.querySelector('input');
        if (input == null) {
            console.error("Input not found on current combobox group: " + parent);
        }
        else {
            if (disable) {
                input.disabled = true;
                input.classList.add('ui-autocomplete-disabled');
                input.classList.add('ui-state-disabled');
                input.setAttribute('tabIndex', '-1');
                input.setAttribute('aria-disabled', 'true');
            }
            else {
                input.disabled = false;
                input.classList.remove('ui-state-disabled');
                input.classList.remove('ui-autocomplete-disabled');
                input.removeAttribute('tabIndex');
                input.setAttribute('aria-disabled', 'false');
            }
        }
    };
    return Dom;
}());
exports.ComboBoxDom = new Dom();
//# sourceMappingURL=core-services-combobox.service.js.map