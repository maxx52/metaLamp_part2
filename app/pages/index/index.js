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

const datepickerButtons = document.querySelectorAll('.datepicker--button')
const myDatepicker = $('#find-room-from').datepicker().data('datepicker')

$('#find-room-from').val('ДД.ММ.ГГГГ')

datepickerButtons[1].addEventListener('click', function(event) {
  myDatepicker.hide()
})

// Dropdown

const input = document.getElementById('guests')
const dropMenu = document.getElementById('guestsDrop')
const values = document.querySelectorAll('.find-room .dropdown-value')
const functionButtons = document.querySelectorAll('.dropdown-function-btn')
const primeItem = document.getElementById('guestDropPrimeItemValue')

let amount = 0

input.addEventListener('click', function(event) {
  dropMenu.classList.toggle('dropdown-content-active')
  input.classList.toggle('field-default-active')
})

// Close dropdown-content-active
$(document).mouseup(function(e) {
  if (dropMenu.classList.contains('dropdown-content-active')) {
    var div = $('#guestDrop')
    if ((!div.is(e.target)) && div.has(e.target).lenght === 0) {
      dropMenu.classList.toggle('dropdown-content-active')
      input.classList.toggle('field-default-active')
    }
  }
})

for (var i = 0; i < values.length; i++) {
  if (values[i].innerHTML == 0) {
    values[i].previousSibling.classList.toggle('dropdown-btn-disable')
  }
  values[i].nextSibling.addEventListener('click', function(event) {
    this.previousSibling.previousSibling.classList.remove('dropdown-btn-disable')
    this.previousSibling.innerHTML = +this.previousSibling.innerHTML + 1
    amount += 1
    if (amount == 1) {
      input.value = amount + 'гость'
      functionButtons[0].style.opacity = '1'
      functionButtons[0].style.cursor = 'pointer'
      if (primeItem.innerHTML > 0) {
        input.value += ', ' + primeItem.innerHTML + ' младенец'
      }
    }
    if (amount >= 2 && amount < 5) {
      input.value = amount + ' гостя'
      if (primeItem.innerHTML > 0) {
        input.value += ', ' + primeItem.innerHTML + ' младенца'
      }
    }
    if (amount >= 5) {
      input.value = amount + ' гостей'
      if (primeItem.innerHTML >= 5) {
        input.value += ', ' + primeItem.innerHTML + ' младенцев'
      } else if (primeItem.innerHTML >= 2) {
        input.value += ', ' + primeItem.innerHTML + ' младенца'
      } else if (primeItem.innerHTML == 1) {
        input.value += ', ' + primeItem.innerHTML + ' младенец'
      }
    }
  })
  values[i].previousSibling.addEventListener('click', function(event) {
    if (this.nextSibling.innerHTML == 0) {
      isZero(this.nextSibling)
    }
    else {
      this.nextSibling.innerHTML = +this.nextSibling.innerHTML - 1
      isZero(this.nextSibling)
      amount -= 1
      input.value = amount + ' гость'
      if (amount == 0) {
        input.value = 'Сколько гостей'
        functionButtons[0].style.opacity = "0"
        functionButtons[0].style.cursor = "default"
      }
      if (amount == 1) {
        input.value = amount + ' гость'
        if (primeItem.innerHTML > 0) {
          input.value += ', ' + primeItem.innerHTML + ' младенец'
        }
      }
      if (amount >= 2 && amount < 5) {
        input.value = amount + ' гостя'
        if (primeItem.innerHTML > 0) {
          input.value += ', ' + primeItem.innerHTML + ' младенца'
        }
      }
      if (amount >= 5) {
        input.value = amount + ' гостей'
        if (primeItem.innerHTML >= 5) {
          input.value += ', ' + primeItem.innerHTML + ' младенцев'
        } else if (primeItem.innerHTML >= 2) {
          input.value += ', ' + primeItem.innerHTML + ' младенца'
        } else if (primeItem.innerHTML == 1) {
          input.value += ', ' + primeItem.innerHTML + ' младенец'
        }
      }
    }
  })
}

if (amount == 0) {
  functionButtons[0].style.opacity = "0"
  functionButtons[0].style.cursor = "default"
}

function isZero(e) {
  if (e.innerHTML == 0) {
    return !!e.previousSibling.classList.toggle('dropdown-btn-disable')
  }
}

functionButtons[0].addEventListener('click', function(event) {
  for (var i = 0; i < values.length; i++) {
    values[i].innerHTML = 0
    values[i].previousSibling.classList.add('dropdown-btn-disable')
  }
  amount = 0
  input.value = 'Сколько гостей'
  functionButtons[0].style.opacity = "0"
  functionButtons[0].style.cursor = "default"
})

functionButtons[1].addEventListener('click', function(event) {
  dropMenu.classList.toggle('dropdown-content-active')
  input.classList.toggle('field-default-active')
})