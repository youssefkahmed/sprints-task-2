var daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

var zodiacSigns = {
  Capricorn: "Capricorn",
  Aquarius: "Aquarius",
  Pisces: "Pisces",
  Aries: "Aries",
  Taurus: "Taurus",
  Gemini: "Gemini",
  Cancer: "Cancer",
  Leo: "Leo",
  Virgo: "Virgo",
  Libra: "Libra",
  Scorpio: "Scorpio",
  Sagittarius: "Sagittarius",
};

function askForName() {
  let name = prompt("Please enter your name: ");

  if (name === "" || name === null) return askForName();

  return true;
}

function askForPassword(attempts = 0) {
  if (attempts === 3) {
    alert("You’ve entered the wrong password 3 times");
    return false;
  }

  let password = prompt("Please enter your password: ");
  attempts++;

  if (password !== "123") return askForPassword(attempts);

  return true;
}

function askForMonth() {
  let month = prompt("Please enter your birth month: ");

  if (month < 1 || month > 12) return askForMonth();

  return [month, daysInMonths[month - 1]];
}

function askForDay(monthDays) {
  let day = prompt("Please enter your birth day: ");

  if (day < 1 || day > monthDays) return askForDay(monthDays);

  return day;
}

function displayHoroscope(day, month) {
  var horoscope = getHoroscope(day, month);
  return alert(`Your Horoscope is: ${horoscope}`);
}

function getHoroscope(day, month) {
  if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
    return zodiacSigns.Capricorn;
  } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
    return zodiacSigns.Aquarius;
  } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
    return zodiacSigns.Pisces;
  } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
    return zodiacSigns.Aries;
  } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
    return zodiacSigns.Taurus;
  } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
    return zodiacSigns.Gemini;
  } else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
    return zodiacSigns.Cancer;
  } else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
    return zodiacSigns.Leo;
  } else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
    return zodiacSigns.Virgo;
  } else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
    return zodiacSigns.Libra;
  } else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
    return zodiacSigns.Scorpio;
  } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
    return zodiacSigns.Sagittarius;
  }
}

function startApp() {
  askForName();

  if (askForPassword(0) === false) return startApp();

  var monthAndDays = askForMonth();
  var month = monthAndDays[0];
  var monthDays = monthAndDays[1];

  var day = askForDay(monthDays);

  displayHoroscope(day, month);
}


// Starting the app
startApp();