// 9x9

/**
 * 返回十字上的所有棋子
 * @param {Array} mapData 棋盘数据
 * @param {Object} obj 落子数据
 * @return {Array}
 */
export function crossData(mapData, obj) {
    let x = obj.x
    let y = obj.y
    let arr=[];
    mapData.forEach((item,i)=>{
        if(item.x == x || item.y == y){
            arr.push(item)
        }
    })
    return arr;
}

function onCross(mapData,obj) {

}
function onHome(mapData, obj) {
    
}

function isWin() {

}
