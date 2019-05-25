(function($) {
  "use strict"; // Start of use strict

  $( ".expandLinkToggle" ).click(function() {
        var $this = $(this);
        $this.toggleClass("open");

        if ($this.hasClass("open")) {
            $this.html("أقل...");
        } else {
            $this.html("أكثر من...");
        }
    });

})(jQuery); // End of use strict
