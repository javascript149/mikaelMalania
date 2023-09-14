let names = ['ann', 'mari', 'james', 'jake', 'luke', 'george'];

for (let count = 0; count < names.length; count = count + 1) {
    if (!names[count].startsWith('j')) {
        console.log(names[count]);
    }
}

for (let name of names) {
    if (!name.startsWith('j')) {
        console.log(name);
    }
};

