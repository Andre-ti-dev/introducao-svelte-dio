const getAll = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve([1, 2, 3, 4, 5]), 3000);
  });

export { getAll };
