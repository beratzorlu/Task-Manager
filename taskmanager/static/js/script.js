document.addEventListener('DOMContentLoaded', function () {
  // sideenav init
  var sidenav = document.querySelectorAll('.sidenav');
  M.Sidenav.init(sidenav);

  // datepicker init
  var datepicker = document.querySelectorAll('.datepicker');
  M.Datepicker.init(datepicker, {
    format: "dd mmm, yyyy",
    i18n: {done: "Select"}
  });

  // select init
  var selects = document.querySelectorAll('select');
  M.FormSelect.init(selects);

  // collapsible init
  var collapsibles = document.querySelectorAll('.collapsible');
  M.Collapsible.init(collapsibles);
});