
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let res = [];
    if (matrix === undefined) return [];
    matrix.map((item, index) => {
        console.log(item, index);
        if (index === 0 || index % 2 === 0) {
          res.push(...item);
        } else {
          res.push(...item.reverse());
        }
    })
    return res
}
