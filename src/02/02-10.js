function work1(onDone) {
  setTimeout(() => onDone('Done 1'), 100);
}

function work2(onDone) {
  setTimeout(() => onDone('Done 2'), 200);
}

function work3(onDone) {
  setTimeout(() => onDone('Done 3'), 300);
}

function urgentWork() {
  console.log('Emer Work');
}

work1(function (msg1) {
  console.log('done ' + msg1);
  work2(function (msg2) {
    console.log('done ' + msg2);
    work3(function (msg3) {
      console.log('done ' + msg3);
    });
  });
});

urgentWork();
