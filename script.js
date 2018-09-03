var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.canvas.width = 400;
ctx.canvas.height = 600;

const numbers = {
  0: [
    [{hours: 3, minutes: 30}, {hours: 3, minutes: 45}, {hours: 3, minutes: 45}, {hours: 9, minutes: 30}],
    [{hours: 12, minutes: 30}, {hours: 3, minutes: 30}, {hours: 9, minutes: 30}, {hours: 12, minutes: 30}],
    [{hours: 12, minutes: 30}, {hours: 12, minutes: 30}, {hours: 12, minutes: 30}, {hours: 12, minutes: 30}],
    [{hours: 12, minutes: 30}, {hours: 12, minutes: 30}, {hours: 12, minutes: 30}, {hours: 12, minutes: 30}],
    [{hours: 12, minutes: 30}, {hours: 12, minutes: 15}, {hours: 12, minutes: 45}, {hours: 12, minutes: 30}],
    [{hours: 12, minutes: 15}, {hours: 3, minutes: 45}, {hours: 3, minutes: 45}, {hours: 12, minutes: 45}],
  ],
  1: [
    [{hours: 3, minutes: 30}, {hours: 3, minutes: 45}, {hours: 6, minutes: 45}, {hours: 7, minutes: 35}],
    [{hours: 12, minutes: 15}, {hours: 6, minutes: 45}, {hours: 12, minutes: 30}, {hours: 7, minutes: 35}],
    [{hours: 7, minutes: 35}, {hours: 12, minutes: 30}, {hours: 12, minutes: 30}, {hours: 7, minutes: 35}],
    [{hours: 7, minutes: 35}, {hours: 12, minutes: 30}, {hours: 12, minutes: 30}, {hours: 7, minutes: 35}],
    [{hours: 3, minutes: 30}, {hours: 12, minutes: 45}, {hours: 12, minutes: 15}, {hours: 6, minutes: 45}],
    [{hours: 12, minutes: 15}, {hours: 3, minutes: 45}, {hours: 3, minutes: 45}, {hours: 12, minutes: 45}],
  ],
  2: [
    [{hours: 3, minutes: 30}, {hours: 3, minutes: 45}, {hours: 3, minutes: 45}, {hours: 6, minutes: 45}],
    [{hours: 12, minutes: 15}, {hours: 3, minutes: 45}, {hours: 6, minutes: 45}, {hours: 12, minutes: 30}],
    [{hours: 3, minutes: 30}, {hours: 3, minutes: 45}, {hours: 12, minutes: 45}, {hours: 12, minutes: 30}],
    [{hours: 12, minutes: 30}, {hours: 3, minutes: 30}, {hours: 3, minutes: 45}, {hours: 12, minutes: 45}],
    [{hours: 12, minutes: 30}, {hours: 12, minutes: 15}, {hours: 3, minutes: 45}, {hours: 9, minutes: 30}],
    [{hours: 12, minutes: 15}, {hours: 3, minutes: 45}, {hours: 3, minutes: 45}, {hours: 12, minutes: 45}],
  ],
  3: [
    [{hours: 3, minutes: 30}, {hours: 3, minutes: 45}, {hours: 3, minutes: 45}, {hours: 6, minutes: 45}],
    [{hours: 12, minutes: 15}, {hours: 3, minutes: 45}, {hours: 6, minutes: 45}, {hours: 12, minutes: 30}],
    [{hours: 6, minutes: 15}, {hours: 3, minutes: 45}, {hours: 12, minutes: 45}, {hours: 12, minutes: 30}],
    [{hours: 12, minutes: 15}, {hours: 3, minutes: 45}, {hours: 6, minutes: 45}, {hours: 12, minutes: 30}],
    [{hours: 3, minutes: 30}, {hours: 3, minutes: 45}, {hours: 12, minutes: 45}, {hours: 12, minutes: 30}],
    [{hours: 12, minutes: 15}, {hours: 3, minutes: 45}, {hours: 3, minutes: 45}, {hours: 12, minutes: 45}],
  ],
  4: [
    [{hours: 3, minutes: 30}, {hours: 6, minutes: 45}, {hours: 3, minutes: 30}, {hours: 9, minutes: 30}],
    [{hours: 12, minutes: 30}, {hours: 12, minutes: 30}, {hours: 12, minutes: 30}, {hours: 12, minutes: 30}],
    [{hours: 12, minutes: 30}, {hours: 12, minutes: 15}, {hours: 12, minutes: 45}, {hours: 12, minutes: 30}],
    [{hours: 12, minutes: 15}, {hours: 3, minutes: 45}, {hours: 6, minutes: 45}, {hours: 12, minutes: 30}],
    [{hours: 7, minutes: 35}, {hours: 7, minutes: 35}, {hours: 12, minutes: 30}, {hours: 12, minutes: 30}],
    [{hours: 7, minutes: 35}, {hours: 7, minutes: 35}, {hours: 12, minutes: 15}, {hours: 12, minutes: 45}],
  ],
  5: [
    [{hours: 3, minutes: 30}, {hours: 3, minutes: 45}, {hours: 3, minutes: 45}, {hours: 6, minutes: 45}],
    [{hours: 12, minutes: 30}, {hours: 3, minutes: 30}, {hours: 3, minutes: 45}, {hours: 12, minutes: 45}],
    [{hours: 12, minutes: 30}, {hours: 12, minutes: 15}, {hours: 3, minutes: 45}, {hours: 9, minutes: 30}],
    [{hours: 12, minutes: 15}, {hours: 3, minutes: 45}, {hours: 6, minutes: 45}, {hours: 12, minutes: 30}],
    [{hours: 3, minutes: 30}, {hours: 3, minutes: 45}, {hours: 12, minutes: 45}, {hours: 12, minutes: 30}],
    [{hours: 12, minutes: 15}, {hours: 3, minutes: 45}, {hours: 3, minutes: 45}, {hours: 12, minutes: 45}],
  ],
  6: [
    [{hours: 3, minutes: 30}, {hours: 3, minutes: 45}, {hours: 3, minutes: 45}, {hours: 6, minutes: 45}],
    [{hours: 12, minutes: 30}, {hours: 3, minutes: 30}, {hours: 3, minutes: 45}, {hours: 12, minutes: 45}],
    [{hours: 12, minutes: 30}, {hours: 12, minutes: 15}, {hours: 3, minutes: 45}, {hours: 9, minutes: 30}],
    [{hours: 12, minutes: 30}, {hours: 3, minutes: 30}, {hours: 6, minutes: 45}, {hours: 12, minutes: 30}],
    [{hours: 12, minutes: 30}, {hours: 12, minutes: 15}, {hours: 12, minutes: 45}, {hours: 12, minutes: 30}],
    [{hours: 12, minutes: 15}, {hours: 3, minutes: 45}, {hours: 3, minutes: 45}, {hours: 12, minutes: 45}],
  ],
  7: [
    [{hours: 3, minutes: 30}, {hours: 3, minutes: 45}, {hours: 3, minutes: 45}, {hours: 6, minutes: 45}],
    [{hours: 12, minutes: 15}, {hours: 3, minutes: 45}, {hours: 9, minutes: 30}, {hours: 12, minutes: 30}],
    [{hours: 7, minutes: 35}, {hours: 7, minutes: 35}, {hours: 12, minutes: 30}, {hours: 12, minutes: 30}],
    [{hours: 7, minutes: 35}, {hours: 7, minutes: 35}, {hours: 12, minutes: 30}, {hours: 12, minutes: 30}],
    [{hours: 7, minutes: 35}, {hours: 7, minutes: 35}, {hours: 12, minutes: 30}, {hours: 12, minutes: 30}],
    [{hours: 7, minutes: 35}, {hours: 7, minutes: 35}, {hours: 12, minutes: 15}, {hours: 12, minutes: 45}],
  ],
  8: [
    [{hours: 3, minutes: 30}, {hours: 3, minutes: 45}, {hours: 3, minutes: 45}, {hours: 9, minutes: 30}],
    [{hours: 12, minutes: 30}, {hours: 3, minutes: 30}, {hours: 9, minutes: 30}, {hours: 12, minutes: 30}],
    [{hours: 12, minutes: 23}, {hours: 12, minutes: 15}, {hours: 12, minutes: 45}, {hours: 12, minutes: 37}],
    [{hours: 6, minutes: 7}, {hours: 3, minutes: 30}, {hours: 9, minutes: 30}, {hours: 6, minutes: 53}],
    [{hours: 12, minutes: 30}, {hours: 12, minutes: 15}, {hours: 12, minutes: 45}, {hours: 12, minutes: 30}],
    [{hours: 12, minutes: 15}, {hours: 3, minutes: 45}, {hours: 3, minutes: 45}, {hours: 12, minutes: 45}],
  ],
  9: [
    [{hours: 3, minutes: 30}, {hours: 3, minutes: 45}, {hours: 3, minutes: 45}, {hours: 6, minutes: 45}],
    [{hours: 12, minutes: 30}, {hours: 6, minutes: 15}, {hours: 9, minutes: 30}, {hours: 12, minutes: 30}],
    [{hours: 12, minutes: 30}, {hours: 12, minutes: 15}, {hours: 12, minutes: 45}, {hours: 12, minutes: 30}],
    [{hours: 12, minutes: 15}, {hours: 3, minutes: 45}, {hours: 9, minutes: 30}, {hours: 12, minutes: 30}],
    [{hours: 7, minutes: 35}, {hours: 7, minutes: 35}, {hours: 12, minutes: 30}, {hours: 12, minutes: 30}],
    [{hours: 7, minutes: 35}, {hours: 7, minutes: 35}, {hours: 12, minutes: 15}, {hours: 12, minutes: 45}],
  ],
};

class Clock {
  constructor(radius, centerX, centerY) {
    this.strokeWidth = 1;
    this.strokeColor = '#999999';
    this.radius = radius - this.strokeWidth;
    this.centerX = centerX;
    this.centerY = centerY;
    this.hours = Math.floor((Math.random() * 12) + 1);
    this.minutes = Math.floor((Math.random() * 60) + 1);
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.centerX, this.centerY, this.radius, 0, 2 * Math.PI, false);
    ctx.lineWidth = this.strokeWidth;
    ctx.strokeStyle = this.strokeColor;
    ctx.stroke();
  }

  setTime(hours, minutes) {
    this.hours = parseFloat(hours.toFixed(2));
    this.minutes = parseFloat(minutes.toFixed(2));
    this.drawArm(this.hours / 12);
    this.drawArm(this.minutes / 60);
  }

  get time() {
    return {hours: this.hours, minutes: this.minutes};
  }

  drawArm(progress) {
    const armRadians = ((2 * Math.PI) * progress) - ((2 * Math.PI) / 4);
    const armLength = this.radius - 3;
 
    const targetX = this.centerX + Math.cos(armRadians) * armLength;
    const targetY = this.centerY + Math.sin(armRadians) * armLength;
 
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#000000';
    ctx.beginPath();
    ctx.moveTo(this.centerX, this.centerY);
    ctx.lineTo(targetX, targetY);
    ctx.stroke();
  }
}

class ClockPanel {
  constructor(width, height, posX, posY) {
    this.width = width;
    this.height = height;
    this.posX = posX;
    this.posY = posY;
    this.rows = 6;
    this.columns = 4;
    this.clocks = Array.from({length: this.rows}, i => []);

    const colWidth = this.width / this.columns;
    const rowHeight = this.height / this.rows;

    let cX = this.posX - (colWidth / 2);
    let cY = this.posY - (rowHeight / 2);

    for (let row = 0; row < this.rows; row++) {
      cX = this.posX - (colWidth / 2);
      cY = cY + rowHeight;
      
      for (let col = 0; col < this.columns; col++) {
        cX = cX + colWidth;
        const clock = new Clock(25, cX, cY);
        this.clocks[row].push(clock);
      }
    }
  }

  draw() {
    this.clocks.forEach(row => row.forEach(clock => clock.draw()));
  }

  displayNumber(numberArray) {
    numberArray.forEach((row, rowIndex) => {
      row.forEach((col, colIndex) => {
        const clock = this.clocks[rowIndex][colIndex];
        let h = clock.time.hours;
        let m = clock.time.minutes;

        if (clock.time.minutes !== col.minutes) {
          m = clock.time.minutes === 60 ? 0 : clock.time.minutes + 1;
        }

        if (clock.time.hours !== col.hours) {
          h = clock.time.hours === 12 ? 0 : clock.time.hours + 0.1;
        }

        clock.setTime(h, m);
      });
    });
  }
}

const hourPanel1 = new ClockPanel(200, 300, 0, 0);
const hourPanel2 = new ClockPanel(200, 300, 200, 0);
const minutePanel1 = new ClockPanel(200, 300, 0, 300);
const minutePanel2 = new ClockPanel(200, 300, 200, 300);

const draw = () => {
  const today = new Date();
  const hours = (`0${today.getHours()}`).slice(-2);
  const minutes = (`0${today.getMinutes()}`).slice(-2);

  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  hourPanel1.draw();
  hourPanel2.draw();
  minutePanel1.draw();
  minutePanel2.draw();

  hourPanel1.displayNumber(numbers[String(hours).charAt(0)]);
  hourPanel2.displayNumber(numbers[String(hours).charAt(1)]);
  minutePanel1.displayNumber(numbers[String(minutes).charAt(0)]);
  minutePanel2.displayNumber(numbers[String(minutes).charAt(1)]);

  window.requestAnimationFrame(draw);
}

const init = () => window.requestAnimationFrame(draw);

init();
