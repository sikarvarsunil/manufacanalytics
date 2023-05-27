import { keyType } from '../types';

/*  @desc: Group all data of same category(setKey) type and set value of targed keys(setValueBykey)
        in array format
    @method:setValBykey
    @input: data [{"Alcohol": 1, "Flavanoids": 1.4, ...other keys}],
            setKey: Alcohol(group by category)
            setValueByTargetKey: Flavanoids is targeted value of setKey
    @output: {
        'Alcohol1': [ all Alcohol1 category ],
        ......
        'Alcoholn': [ all Alcoholn category ],
    }
*/
export const setValBykey = (data: any, setKey: string, setValueByTargetKey: string) => {
    const newObj: keyType = {};
    data.forEach((item): any  => {
      let str: string = `${setKey}${item[setKey]}`;
      if(str in newObj) {
        newObj[str].push(item[setValueByTargetKey]);
      } else {
        newObj[str] = [];
      } 
    })
    return newObj;
}
/*  @desc: Group all data of same category(setKey) type and set value of targed keys(setValueBykey)
        in array format
    @method:setValByCalculation
    @input: data [{"Alcohol": 1, "Flavanoids": 1.4, ...other keys}],
            setKey: Alcohol(group by category)
            targetKeyOne: Ash is targeted value of calc
            targetKeyTwo: Hue is targeted value of calc
            divideKey: Magnesium is targeted value of calc
    @output: {
        'Alcohol1': [ all Alcohol1 category ],
        ......
        'Alcoholn': [ all Alcoholn category ],
    }
*/
export const setValByCalculation = (data: any, setKey: string, targetKeyOne: string, targetKeyTwo: string, divideKey: string) => {
    const newObj: keyType = {};
    data.forEach((item): any  => {
      const calculateResult = ((Number(item[targetKeyOne]) * Number(item[targetKeyTwo])) / Number(item[divideKey])).toFixed(3);
      let str: string = `${setKey}${item[setKey]}`;
      if(str in newObj) {
        newObj[str].push(calculateResult);
      } else {
        newObj[str] = [];
      } 
    })
    return newObj;
}

/*  @desc: Itrate over data to get Mean, Median, Mode of targeted catType.
    @method: setMeanMedianMode
    @input- data: {'Alcohol1': [ all Alcohol1 category ]}, catType: 'Flavanoids
    
    @output {
        title: catType,
        mean: data[n],
        median: data[n],
        mode: data[n]
    }
*/
export const setMeanMedianMode = (data: any, catType: string) => {
    const mmmDataObj = {};
    Object.keys(data).forEach((item) => {
        if(!mmmDataObj[item]) {
            mmmDataObj[item] = {
                'title': catType,
                'mean': mean(data[item]),
                'mode': mode(data[item]),
                'median': median(data[item]),
            }
        }
    })
    return mmmDataObj;
}

/*  @desc: get Mode.
    @mehod: mode
    @input: arr: [...Number]
    
    @output: number[]- [Mode of arr]
*/
export const mode = (arr: number[]): number[] => {
    const obj = {};
    const result: number[] = [];
    arr.forEach((item) => {
        const numItem = Number(item);
        const key = (numItem * 100).toString();
        if(obj[key] === numItem && !result.includes(numItem)) {
            result.push(numItem)
        }
        obj[key] = numItem;
    });
    return result;
}

/*  @desc: get Median.
    @mehod: median
    @input: arr: [...Number]
    
    @output: number- median of arr
*/
export const median = (arr) => {
    const getSortItem = arr.sort((a, b) => Number(b) - Number(a));
    return getSortItem % 2 === 0 
            ? (getSortItem[getSortItem.length/2 -1] + getSortItem[getSortItem.length/2]/2)
            : getSortItem[Math.floor(getSortItem.length/2)]
};

/*  @desc: get Mean.
    @mehod: mean
    @input: arr: [...Number]
    
    @output: number- mean of arr
*/
export const mean = (arr) => {
    const getSum = arr.reduce((acc, item) => acc + Number(item), 0);
    return  Number((getSum / arr.length).toFixed(2));
};