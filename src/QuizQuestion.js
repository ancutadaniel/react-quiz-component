import React, { Component } from 'react';
import QuizQuestionButton from "./QuizQuestionButton";


class QuizQuestion extends React.Component {
    render() {
        const questions = this.props.quiz_question;
        console.log((questions));
        return(
            <main>
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul>
                        { questions.answer_options.map((question, id) =>
                            return
                                <QuizQuestionButton
                                    key={id}
                                    button_text={question}
                                />
                        )}

                    </ul>
                </section>
            </main>
        );
    }
}

export default QuizQuestion;
