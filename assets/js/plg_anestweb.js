/**
 * Este arquivo aplica algumas "melhorias" aos elementos HTML.
 */

(function () {
    // Inclui a função isEmpty nos elementos INPUT.
    var isEmpty = function () {
        if (this instanceof HTMLElement) {
            return (this.value === '');
        } else {
            return false;
        }
    };
    HTMLInputElement.prototype.isEmpty = isEmpty;
    HTMLTextAreaElement.prototype.isEmpty = isEmpty;

    // Observa o método input para verificar os elementos input
    document.addEventListener('input', function (e) {
        if (e.target instanceof HTMLInputElement) {
            if (e.target.isEmpty()) {
                e.target.classList.remove('hasContent');
            } else {
                e.target.classList.add('hasContent');
            }
        }
    }, true);
}());
