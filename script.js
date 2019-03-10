const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.canvas.width = ((window.innerHeight / 3) * 2) - 80;
ctx.canvas.height = window.innerHeight - 120;

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
    this.strokeWidth = 3;
    this.strokeColor = '#333';
    this.armColor = 'white';
    this.armWidth = 3;
    this.radius = radius - this.strokeWidth;
    this.centerX = centerX;
    this.centerY = centerY;
    this.hours = Math.floor((Math.random() * 12) + 1);
    this.minutes = Math.floor((Math.random() * 60) + 1);
  }

  draw() {
    ctx.lineJoin = 'round';
		ctx.lineCap = 'round';
    ctx.lineWidth = this.strokeWidth;
    ctx.strokeStyle = this.strokeColor;
    
    ctx.beginPath();
    ctx.arc(this.centerX, this.centerY, this.radius, 0, 2 * Math.PI, false);
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
    const armLength = this.radius - this.strokeWidth * 2;
 
    const targetX = this.centerX + Math.cos(armRadians) * armLength;
    const targetY = this.centerY + Math.sin(armRadians) * armLength;
 
    ctx.lineWidth = this.armWidth;
    ctx.strokeStyle = this.armColor;
    ctx.beginPath();
    ctx.moveTo(this.centerX, this.centerY);
    ctx.lineTo(targetX, targetY);
    ctx.stroke();
  }
}

class ClockPanel {
  constructor(height, posX, posY) {
    this.height = height;
    this.width = (height / 3) * 2;
    this.posX = posX;
    this.posY = posY;
    this.rows = 6;
    this.columns = 4;
    this.clockSpacing = 2;
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
        clockSize = ((this.height / this.rows) / 2) - this.clockSpacing / 2;
        const clock = new Clock(clockSize, cX, cY);
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

const rows = 2;
const columns = 2;
const panels = [];

for (let r = 0; r < rows; r++) {
  for (let c = 0; c < columns; c++) {
    const panelPosX = (ctx.canvas.width / columns) * c;
    const panelPosY = (ctx.canvas.height / rows) * r;
    panels.push(new ClockPanel(ctx.canvas.height / 2, panelPosX, panelPosY));
  }
}

const draw = () => {
  const today = new Date();
  const hours = (`0${today.getHours()}`).slice(-2);
  const minutes = (`0${today.getMinutes()}`).slice(-2);

  ctx.canvas.width = ((window.innerHeight / 3) * 2) - 80;
  ctx.canvas.height = window.innerHeight - 120;
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  panels.forEach(p => p.draw());

  panels[0].displayNumber(numbers[String(hours).charAt(0)]);
  panels[1].displayNumber(numbers[String(hours).charAt(1)]);
  panels[2].displayNumber(numbers[String(minutes).charAt(0)]);
  panels[3].displayNumber(numbers[String(minutes).charAt(1)]);

  requestAnimationFrame(draw);
}

const init = () => requestAnimationFrame(draw);

init();
