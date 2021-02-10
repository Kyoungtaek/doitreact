const work1 = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve('Done1'), 100);
  });

const work2 = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve('Done2'), 100);
  });

const work3 = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve('Done3'), 100);
  });

function urgentWork() {
  console.log('urgent work');
}

const nextWorkDone = (msg1) => {
  console.log('done after: ' + msg1);

  return work2();
};

work1()
  .then(nextWorkDone)
  .then((msg2) => {
    console.log('done after: ' + msg2);
    return work3();
  })
  .then((msg3) => {
    console.log('done after: ' + msg3);
  });

urgentWork();
