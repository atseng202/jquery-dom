"use strict";
/* Part Two: Movies App!
// Build an application that uses jQuery to do the following:

Contains a form with two inputs for a title and rating along with a button to submit the form.
When the form has is submitted, capture the values for each of the inputs and append them do the DOM along with a button to remove each title and rating from the DOM.
When the button to remove is clicked, remove each title and rating from the DOM.
*/


$("#submitButton").on("click", submit);
/* Called by Submit button event handler.
 * Adds new movie element.
 */
function submit(evt) {
  evt.preventDefault();
  let title = $("#title").val();
  let rating = $("#rating").val();
  $("#movies").append(`<li>${title} ${rating}</li>`);

  $("#movies>li:last-child").append($("<button>Remove</button>")
    .addClass("removeButton")
    .on("click", remove));
}
/* Called by Remove button event handler.
 * Removes the element which has been added.
 */
function remove(evt) {
  evt.preventDefault();
  evt.target.parentNode.remove();
}
