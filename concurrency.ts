/*
 * 3 concept of asynchronous javascript
 * - callback       (problem: callback hell)
 * - promise        (problem: promise chaining)
 * - async/await
 */
const url = 'https://brachio.site/download';

// 1. callback
const notify = (): void => {
  console.log('Callback: download complete!');
};

const download1 = (url: string, callback: () => void): void => {
  console.log(`Downloading from ${url}`);
  callback();
};

download1(url, notify);

// 2. promise
const progress: number = 100;
const download2 = new Promise((resolve, reject) => {
  progress === 100 ? resolve('Promise: Download complete') : reject('Promise: Download failed');
});

// promise handler
download2
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error));

// 3. async/await -> syntax similar with synchronous javascript
// fungsi getStatus cuma buat simulasi proses asinkronus (setTimeout)
const getStatus = (url: string): Promise<any> => {
  console.log(`\nDownloading from ${url}`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Async/await: download complete');
    }, 2000);
  });
};

const download3 = async (url: string): Promise<void> => {
  try {
    const status = await getStatus(url);
    console.log(`\n${status}`);
  } catch (error) {
    console.log(error);
  }
};

download3(url);
