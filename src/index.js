import React from 'react';
import ReactDOM from 'react-dom';



class Comp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            matrix: [null, null, null, null, null, null, null, null, null]
        }


    }

    handleClick(index) {
        if (this.state.matrix[index] === null) {}
            const newMatrix = this.state.matrix;
            newMatrix[index] = this.state.player

            this.setState({
                player: this.state.player === 'x' ? 'o' : 'x',
                mat: newMatrix,
            });
        }
    }

    render() {
        const gridStyle = {
            display: 'grid',
            gridTemplateRows: '150px 150px 150px',
            gridTemplateColumns: '150px 150px 150px',
            gridGap: '10px',
            width: '470px',
            margin: '30px auto'
        }

        const elementStyle = {
            background: 'orange',
            borderRadius: '5px',
        }
    	return (
    	    <div style={gridStyle}>
                {
                    this.state.matrix.map((matElement, index)=> {
                        return (
                            <div 
                                key={index} 
                                style={elementStyle}
                                onClick={this.handleClick.bind(this, index)}
                            >
                                {this.state.matrix[index]}
                            </div>
                        );
                    })
                }
            </div>
    	); 
    }
}

ReactDOM.render(<Comp/>, document.getElementById('root'));
