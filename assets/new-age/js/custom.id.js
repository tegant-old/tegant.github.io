(function($) {
  "use strict"; // Start of use strict

  $( ".expandLinkToggle" ).click(function() {
        var $this = $(this);
        $this.toggleClass("open");

        if ($this.hasClass("open")) {
            $this.html("Lebih sedikit...");
        } else {
            $this.html("Lebih lanjut...");
        }
    });

})(jQuery); // End of use strict
