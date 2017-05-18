const COLORS = [
  '#00E3AD',
  '#4D99EF',
  '#CF72B1',
  '#6A6AD5',
  '#6A6AD5',
  '#FFCD3B'
];

function randomColor () {
  COLORS[Math.floor(Math.random()*items.length)];
}

module.exports = {
  actionText: '#3FB4CF',
  inactiveText: '#9B9B9B',
  darkText: '#032250',
  lightText: '#7F91A7',
  cellBorder: '#EEEEEE',
  lightBackground: '#EEEEEE',
  darkBackground: '#183E63',
  randomColor
};
