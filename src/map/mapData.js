
const x_axis = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const y_axis = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']

const mapData = (str) => {
    const arr = str.split('');
    let n = 0;
    let data_arr = [];
    y_axis.forEach((y_val, i) => {
        x_axis.forEach((x_val, j) => {
            let _val = arr[n]
            let isDefault = true;
            let background = '#f1f0f0';
            _val == '.' && (_val = '', isDefault = false, background = '#fff');
            n++;
            data_arr.push({
                id: n - 1,
                isDefault: isDefault,
                y: y_val,
                x: x_val,
                yx: y_val + x_val,
                remarks: [false, '', '', '', '', '', '', '', '', ''],
                background_default: background,
                background: background,
                text: `${_val}`
            })
        })
    });
    return data_arr
}
export default mapData