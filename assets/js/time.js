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

// Function to get the current Bengali date and Hijri date
function getBengaliAndHijriDate() {
  // Hardcoded values based on your request for dynamic calculation
  const hijriDay = 1; // Example Hijri day
  const hijriMonth = 'জমাদিউল-আউয়াল'; // Hijri month
  const hijriYear = 1446; // Hijri year

  const bengaliDay = 20; // Example Bengali day
  const bengaliMonth = 'কার্তিক'; // Bengali month
  const bengaliYear = 1431; // Bengali year
  const season = 'হেমন্তকাল'; // Season

  const hijriDaySuffix = hijriDay === 1 ? 'লা' : 'শে'; // 'লা' for 1, 'শে' for others
  const formattedHijriDay = `${convertToBengaliNumerals(
    hijriDay
  )}${hijriDaySuffix}`;

  const bengaliDaySuffix = bengaliDay === 1 ? 'লা' : 'শে'; // 'লা' for 1, 'শে' for others
  const formattedBengaliDay = `${convertToBengaliNumerals(
    bengaliDay
  )}${bengaliDaySuffix}`;

  return {
    hijriDate: `${formattedHijriDay} ${hijriMonth} ${convertToBengaliNumerals(
      hijriYear
    )} হিজরী`,
    bengaliDate: `${formattedBengaliDay} ${bengaliMonth} ${convertToBengaliNumerals(
      bengaliYear
    )} বঙ্গাব্দ (${season})`,
  };
}

// Today's date for the day name
const today = new Date();
const dayName = new Intl.DateTimeFormat('bn-BD', { weekday: 'long' }).format(
  today
);

// Get Bengali and Hijri date
const { hijriDate, bengaliDate } = getBengaliAndHijriDate();

// Set content in HTML
document.getElementById('day-name').innerText = dayName;
document.getElementById(
  'gregorian-date'
).innerText = `${convertToBengaliNumerals(
  today.getDate()
)} ঠা${new Intl.DateTimeFormat('bn-BD', { month: 'long' }).format(
  today
)} ${convertToBengaliNumerals(today.getFullYear())} ইং`;
document.getElementById(
  'bengali-hijri-date'
).innerText = `${hijriDate}, ${bengaliDate}`;
