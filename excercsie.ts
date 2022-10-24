const first = <T>(array: T[]) => {
    return array[array.length - 1];
};

const f = first([1, 2, 3]);

const f2 = first(["a", "b", "c"]);