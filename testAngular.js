console.log('started');

// [...Array(100000).keys()].forEach(e=>console.log(e));

[...Array(100).keys()].forEach(e => setTimeout(() => {
    console.log(e);
}, 0));

console.log('end');