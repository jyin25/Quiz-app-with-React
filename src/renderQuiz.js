import React from 'react';
import RenderQuestion from './renderQuestion';

class RenderQuiz extends React.Component {
    state = {
        question: 0
    }

    render() {
        const store = this.props.store.data;
        console.log(store);
        const questionNum = this.state.question

        return (
            <div>
                <h1 className='text question'>{store[questionNum].question}</h1>
                <form>
                <fieldset className="form-container">
                    <label>
                        <RenderQuestion store={store}/>
                    </label>
                </fieldset>
                <button type="submit" className="js-submit-button button"> Submit </button>
                </form>
            </div>
        )
    }
}

export default RenderQuiz;