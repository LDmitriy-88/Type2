"use strict";
function openModal(id) {
    if (id === void 0) { id = null; }
    var template = "<div>MyModal</div>";
    var modal = new Modal(id);
    modal.open(template);
}
function removeModal() {
    Modal.removeById();
}
function openModalSecond(id) {
    if (id === void 0) { id = null; }
    var template = "<div>MyModal 2</div>";
    var modal = new Modal(id);
    modal.open(template);
}
function removeAll(id) {
    if (id === void 0) { id = null; }
    Modal.removeAll();
}
var Modal = /** @class */ (function () {
    function Modal(id) {
        if (id === void 0) { id = null; }
        var findModal = Modal.modals.find(function (x) { return x.id === id; });
        if (findModal) {
            Modal.removeById(id);
        }
        Modal.modals.push(this);
        console.log("Modal.modals", Modal.modals);
        this.id = id || (Math.random() + Modal.modals.length);
    }
    Modal.prototype.open = function (template) {
        var divWrap = document.createElement("div");
        divWrap.innerHTML = template;
        divWrap.id = this.id;
        divWrap.setAttribute('modal-id', this.id);
        divWrap.classList.add("modal-element");
        document.body.appendChild(divWrap);
    };
    Modal.prototype.remove = function () {
        var modalEl = document.getElementById(this.id);
        modalEl.parentNode.removeChild(modalEl);
    };
    Modal.removeById = function (id) {
        if (id === void 0) { id = null; }
        var modalId = id;
        var findEl = Modal.modals.find(function (x) { return x.id === modalId; });
        if (findEl) {
            findEl.remove();
            Modal.modals = Modal.modals.filter(function (el) { return el.id !== modalId; });
        }
        else {
            if (Array.isArray(Modal.modals)) {
                var lastEl = Modal.modals.pop();
                if (lastEl) {
                    lastEl.remove();
                }
            }
        }
    };
    Modal.removeAll = function () {
        if (Array.isArray(Modal.modals)) {
            Modal.modals.forEach(function (el) {
                Modal.removeById(el.id);
            });
        }
    };
    Modal.modals = [];
    return Modal;
}());
var modal = new Modal();
//# sourceMappingURL=modalService.js.map