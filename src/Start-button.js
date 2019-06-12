import React from 'react';
import App from './App';

class StartButton extends React.Component {
    state = {
        question: 0
    }

    handleButton = () => {
        const startQuiz = this.state.question + 1
        this.setState({
            question: startQuiz
        })
    }

    render () {
        return (
            <div>
                <p> {this.state.question}</p>
                <button className="startQuiz button" onClick={this.handleButton}>Donut Time!</button>
            </div>
        )
    }
}

export default StartButton;