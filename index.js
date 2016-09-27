const rekurtz = (objekt, start) => {
    var root = objekt[start];
    if (!root) {
        return function () {
            return `no such starting key ${start}`;
        }
    }
    return function (key) {
        var path = key.split('.');
        var current = root;

        function traverse(path, current) {
            var step = path.shift();
            if (current[step]) {
                current = current[step];
            } else {
                current = `no such key ${key}`;
                path = [];
            }
            return (path.length > 0) ? traverse(path, current) : current
        }

        return traverse(path, current);
    };
};

export default rekurtz;
