// 冒泡排序
function bubbleSort(myArr) {
  let isSorted = true; // 标识数列是否已排序
    // 外层排序趟数
    for (let i = 0; i < myArr.length - 1; i++) {
      isSorted = true;
      // 内层 需要进行相邻元素比较次数
      for (let j = 0; j < myArr.length - 1 - i; j++) {
        // 相邻元素比较
        if (myArr[j] > myArr[j + 1]) {
          // 第一个元素大于第二个元素，则交换位置
          [myArr[j], myArr[j + 1]] = [myArr[j + 1], myArr[j]];
          isSorted = false; // 进行了位置交换，则表示数列不是已排序的
        }
      }

      // 如果本趟数列是已排序的，则不需要进行下一趟比较排序。
      if (isSorted) {
        break;
      }
    }

    return myArr;
  }

  let arr = [3, 32, 16,7, 26];
  console.log(bubbleSort(arr));