const ToolItem = (props) => {
    return (
        <div
            onClick={props.ToolItemClick}
            style={{ float: 'left', backgroundColor: '#fff',
                width: 45, height: 45, lineHeight: '45px', textAlign: 'center' }}
        >
            {props.children}
        </div>
    );
};

class RemarkBtn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active:false
        };
    }
    changState(){
        this.props.ToolItemClick()
        this.setState((prevState) => ({
            active: !prevState.active
        }));
    }
    render() {
        return (
            <div
                onClick={this.changState.bind(this)}
                style={{
                    float: 'left', backgroundColor: this.state.active?'#ccc':'#fff',
                    width: 45, height: 45, lineHeight: '45px', textAlign: 'center'
                }}
            >
                {this.props.children}
            </div>
        );
    }
}
const ToolBar = (props) => {
    return (
        <div style={{ marginTop: 20 }}>
            <ToolItem ToolItemClick={props.ToolItemClick.bind(this, '1')}>1</ToolItem>
            <ToolItem ToolItemClick={props.ToolItemClick.bind(this, '2')}>2</ToolItem>
            <ToolItem ToolItemClick={props.ToolItemClick.bind(this, '3')}>3</ToolItem>
            <ToolItem ToolItemClick={props.ToolItemClick.bind(this, '4')}>4</ToolItem>
            <ToolItem ToolItemClick={props.ToolItemClick.bind(this, '5')}>5</ToolItem>
            <ToolItem ToolItemClick={props.ToolItemClick.bind(this, '6')}>6</ToolItem>
            <ToolItem ToolItemClick={props.ToolItemClick.bind(this, '7')}>7</ToolItem>
            <ToolItem ToolItemClick={props.ToolItemClick.bind(this, '8')}>8</ToolItem>
            <ToolItem ToolItemClick={props.ToolItemClick.bind(this, '9')}>9</ToolItem>
            <ToolItem ToolItemClick={props.ToolItemClick.bind(this, '')}>清除</ToolItem>
            <RemarkBtn ToolItemClick={props.ToolItemClick.bind(this, 'remark')}>标记</RemarkBtn>
        </div>
    );
};

export default ToolBar
