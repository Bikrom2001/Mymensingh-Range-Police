// Function to convert English numerals to Bengali numerals
function convertToBengaliNumerals(number) {
  const englishToBengaliDigits = {
    0: '০',
    1: '১',
    2: '২',
    3: '৩',
    4: '৪',
    5: '৫',
    6: '৬',
    7: '৭',
    8: '৮',
    9: '৯',
  };
  return number
    .toString()
    .split('')
    .map((digit) => englishToBengaliDigits[digit] || digit)
    .join('');
}

// Today's date for the day name
const today = new Date();
const dayName = new Intl.DateTimeFormat('bn-BD', { weekday: 'long' }).format(
  today
);

// Set content in HTML
document.getElementById('day-name').innerText = dayName;
document.getElementById(
  'gregorian-date'
).innerText = `${convertToBengaliNumerals(
  today.getDate()
)} ${new Intl.DateTimeFormat('bn-BD', { month: 'long' }).format(
  today
)} ${convertToBengaliNumerals(today.getFullYear())} ইং`;
// document.getElementById(
//   'bengali-hijri-date'
// ).innerText = `${hijriDate}, ${bengaliDate}`;

function getBanglaNumerals(num) {
  const banglaNumerals = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return num
    .toString()
    .split('')
    .map((digit) => banglaNumerals[digit])
    .join('');
}

function getHijriDate() {
  const today = new Date();

  const hijriEpoch = new Date(622, 6, 16); // Hijri epoch (July 16, 622 AD)
  const daysInHijriYear = 354.367;

  const diffInMilliseconds = today - hijriEpoch;
  const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));

  const hijriYear = Math.floor(diffInDays / daysInHijriYear) + 1;
  const daysInCurrentHijriYear = Math.floor(diffInDays % daysInHijriYear);

  const hijriMonths = [30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 29];

  let hijriMonth = 0;
  let hijriDay = daysInCurrentHijriYear;

  for (let i = 0; i < hijriMonths.length; i++) {
    if (hijriDay < hijriMonths[i]) {
      hijriMonth = i + 1; // Months are 1-indexed
      hijriDay++;
      break;
    }
    hijriDay -= hijriMonths[i];
  }

  // Bangla month names
  const monthNames = [
    'মাহররম',
    'সফর',
    'রবিউল আউয়াল',
    'রবিউল সানি',
    'জমাদিউল আউয়াল',
    'জমাদিউস সানি',
    'রজব',
    'শাবান',
    'রমজান',
    'শাওয়াল',
    'জুল ক্বিদা',
    'জুল হিজ্জা',
  ];

  const hijriMonthName = monthNames[hijriMonth - 1];

  // Convert day and year to Bangla numerals
  const banglaDay = getBanglaNumerals(hijriDay);
  const banglaYear = getBanglaNumerals(hijriYear);

  return {
    day: banglaDay,
    month: hijriMonth,
    monthName: hijriMonthName,
    year: banglaYear,
  };
}

// Get the current Hijri date in Bangla
const { day, monthName, year } = getHijriDate();

function convertToBanglaDate(dateString) {
  const monthsInBangla = [
    'বৈশাখ',
    'জ্যৈষ্ঠ',
    'আষাঢ়',
    'শ্রাবণ',
    'ভাদ্র',
    'আশ্বিন',
    'কার্তিক',
    'অগ্রহায়ণ',
    'পৌষ',
    'মাঘ',
    'ফাল্গুন',
    'চৈত্র',
  ];

  const daysInBangla = [
    'শনিবার',
    'রবিবার',
    'সোমবার',
    'মঙ্গলবার',
    'বুধবার',
    'বৃহস্পতিবার',
    'শুক্রবার',
  ];

  const numbersInBangla = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

  const date = new Date(dateString);

  const day = daysInBangla[date.getDay()];
  const month = monthsInBangla[date.getMonth()];
  const year = date
    .getFullYear()
    .toString()
    .replace(/[0-9]/g, (digit) => numbersInBangla[digit]);
  const hour = date
    .getHours()
    .toString()
    .replace(/[0-9]/g, (digit) => numbersInBangla[digit]);
  const minute = date
    .getMinutes()
    .toString()
    .replace(/[0-9]/g, (digit) => numbersInBangla[digit]);

  return `সময়: ${hour}:${minute}, ${day}, ${date.getDate()} ${month}, ${year} ${date.getFullYear()} বঙ্গাব্দ, ${hour}:${minute} ${
    hour < 12 ? 'পূর্বাহ্ন' : 'অপরাহ্ণ'
  }`;
}

const englishDate =
  'Sat Feb 10 2024 15:33:51 GMT+0600 (Bangladesh Standard Time)';
const banglaDate = convertToBanglaDate(englishDate);
console.log(banglaDate);

let dateConverted = new buetDateConverter().convert('jশে F, Y (বঙ্গাব্দ )');

document.getElementById(
  'bengali-hijri-date'
).innerText = `${day}রা ${monthName} ${year} হিজরী, ${dateConverted}`;
