import './GridItem.less';
export default function renderItem(dataItem){
    return (
        <div style={{ background: dataItem.background, height:'100%' }}>
            <div className="big-face"
                style={{ display: dataItem.remarks[0] ? 'none' : 'flex' }}>
                {dataItem.text}
            </div>
            <div className="small-face" style={{ display: dataItem.remarks[0] ? 'flex' : 'none' }}>
                <div className="column">
                    <span>{dataItem.remarks[1]}</span>
                    <span>{dataItem.remarks[4]}</span>
                    <span>{dataItem.remarks[7]}</span>
                </div>
                <div className="column">
                    <span>{dataItem.remarks[2]}</span>
                    <span>{dataItem.remarks[5]}</span>
                    <span>{dataItem.remarks[8]}</span>
                </div>
                <div className="column">
                    <span>{dataItem.remarks[3]}</span>
                    <span>{dataItem.remarks[6]}</span>
                    <span>{dataItem.remarks[9]}</span>
                </div>
            </div>
        </div>
    )
}