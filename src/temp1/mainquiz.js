import React from "react";

import questions from "./db.json";
import "./quiz.css";
class Quiz extends React.Component {
  constructor() {
    super();
    this.state = {
      questions: questions,
      questionCnt: 1,
    };
  }

  componentDidMount() {
    sessionStorage.setItem("cnt", 0);
  }

  answerCopy = (idx, questionidx) => {
    // console.log(idx,questionidx);
    console.log(
      typeof this.state.questions[questionidx - 1].answerOptions[idx].isCorrect
    );
    console.log(typeof true);
    if (
      this.state.questions[questionidx - 1].answerOptions[idx].isCorrect ===
      true
    ) {
      sessionStorage.setItem(
        "cnt",
        JSON.parse(sessionStorage.getItem("cnt")) + 1
      );
    }

    this.setState({
      ...this.state,
      questionCnt: this.state.questionCnt + 1,
    });
  };

  restart = () => {
    this.setState({
      ...this.state,

      questionCnt: 1,
    });
    sessionStorage.setItem("cnt", 0);
  };

  render() {
    // console.log(this.state.correctAnsCnt);
    var randomQues = Math.floor(Math.random() * 10 + 1);
    return (
      <div className="row1 ">
        <div className="col1">
          {this.state.questionCnt > 4 ? (
            <div className="rowlast ">
              <div className="collast">
                {`You scored ${JSON.parse(
                  sessionStorage.getItem("cnt")
                )} out of 4`}
              </div>
            </div>
          ) : (
            <div className="row2">
              <div className="col2">
                <h2>{`Question ${this.state.questionCnt}/4`}</h2>
                <p className="question">
                  {this.state.questions[randomQues - 1].questionText}
                </p>
              </div>
              <div className="col2">
                {this.state.questions[randomQues - 1].answerOptions.map(
                  (ans, idx) => {
                    return (
                      <button
                        key={idx}
                        className="buttons"
                        onClick={() => this.answerCopy(idx, randomQues)}
                      >
                        {ans.answerText}
                      </button>
                    );
                  }
                )}
              </div>
            </div>
          )}

          <button className="restart" onClick={this.restart}>
            Restart
          </button>
        </div>
      </div>
    );
  }
}

export default Quiz;
