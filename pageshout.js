(function() {

    const PageShout = function() {
        this.init();
    };

    /*
     * Initialize library
     */
    PageShout.prototype.init = function() {

        const self = this;

        document.addEventListener('DOMContentLoaded', function() {
            const container = document.querySelector('.pageShoutContainer');
            self.load(container);
        });

    };

    PageShout.prototype.load = function(container) {

        const self = this;

        container.addEventListener('select', function(range) {
            console.log(range);
        });

    };

    window._pslib = new PageShout();

})();