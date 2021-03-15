// Datepicker

$('#find-room-from').datepicker({
  minDate: new Date(),
  range: true,
  multipleDatesSeparator: "-",
  onSelect: function(formattedDate, date, inst) {
    $('#find-room-from').val(formattedDate.split("-")[0])
    $('#find-room-to').val(formattedDate.split("-")[1])
  },
  prevHtml: '<div class="find-room-arrow-date find-room-arrow-date-prev></div>',
  nextHtml: '<div class="find-room-arrow-date find-room-arrow-date-next></div>',
  clearButton: true,
  todayButton: true
})