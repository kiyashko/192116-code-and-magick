
'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 250;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_GAP = 50;
var TEXT_GAP = 20;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

function getRandomValue (min, max) {
  return Math.random() * (max - min) + min;
}

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', CLOUD_X + 20, CLOUD_Y + 15);
  ctx.fillText('Список результатов:', CLOUD_X + 20, CLOUD_Y + 35);
  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], CLOUD_X + BAR_WIDTH + (BAR_GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - TEXT_GAP);
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0,0,255,' + getRandomValue(0, 1) + ')';
    }
    ctx.fillRect(CLOUD_X + BAR_WIDTH + (BAR_GAP + BAR_WIDTH) * i, (CLOUD_HEIGHT - TEXT_GAP) - BAR_HEIGHT * times[i] / maxTime, BAR_WIDTH, BAR_HEIGHT * times[i] / maxTime);
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_WIDTH + (BAR_GAP + BAR_WIDTH) * i, (CLOUD_HEIGHT - TEXT_GAP) - BAR_HEIGHT * times[i] / maxTime - TEXT_GAP);
  }
};
