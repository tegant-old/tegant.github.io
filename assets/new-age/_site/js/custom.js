(function($) {
  "use strict"; // Start of use strict

  $( ".expandLinkToggle" ).click(function() {
        var $this = $(this);
        $this.toggleClass("open");

        if ($this.hasClass("open")) {
            $this.html("less...");
        } else {
            $this.html("more...");
        }
    });

})(jQuery); // End of use strict
