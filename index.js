module.exports = (objekt, start) => {
    start = start && start.split('.') || [];
    const traverse = (path, current, key) => {
        const step = path.shift();
        if (current[step]) {
            current = current[step];
        } else {
            current = `no such key ${key}`;
            path = [];
        }
        return (path.length > 0) ? traverse(path, current, key) : current
    };
    const root = (start[0]) ? traverse(start, objekt) : objekt;

    if (typeof root === 'string') {
        return function () {
            return `no such starting key ${start}`;
        }
    }

    return function (key) {
        const path = key.split('.');
        const current = root;
        return traverse(path, current, key);
    };
};

