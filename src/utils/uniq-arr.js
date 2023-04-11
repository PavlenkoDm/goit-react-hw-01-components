import data from '../data/data.json'

export const uniqArr = (someArr) => {
    return someArr.reduce((acc, currObj) => {
        const index = acc.findIndex(item => item.label === currObj.label);
        if (index !== -1) {
            acc[index].percentage += currObj.percentage;
        } else {
            acc.push(currObj);
        }
        return acc;
    }, []);
}

export const uniq = uniqArr(data);