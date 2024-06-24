import React, { useState } from "react";        //このコンポーネントの状態管理のためuseStateを使用
import "../style-sheets/Quiz.css";
import questions from "./question";             //クイズ問題ファイル
import { keyboardRows } from "./keyboadRows";   //キーボードのボタン配置ファイル
import QuizQuestion from "./QuizQuestion";      //QuizQuestionコンポーネント
import Icon from '../assets/vscode-icon.png';   //VSCodeのアイコン

const Quiz = () => {
  // クイズの現在の質問インデックスを管理
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // ユーザーのスコアを管理
  const [score, setScore] = useState(0);
  // ユーザーが選択したキーの配列を管理
  const [selectedKeys, setSelectedKeys] = useState([]);
  // 回答の表示状態を管理
  const [showAnswer, setShowAnswer] = useState(false);
  // ユーザーの回答が正解か不正解かを管理
  const [isCorrect, setIsCorrect] = useState(false);
  // クイズが完了したかどうかを管理
  const [quizCompleted, setQuizCompleted] = useState(false);
  // クイズが再開されたかどうかを管理
  const [quizRestarted, setQuizRestarted] = useState(false);

  // ユーザーがキーをクリックしたときの処理
  const handleKeyClick = (key) => {
    // 既に選択されているキーなら、選択を解除
    if (selectedKeys.includes(key)) {
      setSelectedKeys(selectedKeys.filter((k) => k !== key));
    } else {
      // 新たに選択されたキーを追加
      setSelectedKeys([...selectedKeys, key]);
    }
  };

  // ユーザーが回答をチェックするときの処理
  const handleCheckAnswer = () => {
    // 現在の質問の正解を取得
    const correctAnswer = questions[currentQuestion].correctAnswer;

    // ユーザーの選択が正解と一致するかチェック
    if (arraysEqual(selectedKeys, correctAnswer.split(" + "))) {
      setScore((prevScore) => prevScore + 1); // スコアを増加
      setIsCorrect(true); // 正解フラグを設定
    } else {
      setIsCorrect(false); // 不正解フラグを設定
    }

    setShowAnswer(true); // 回答を表示する
  };

  // 次の質問に進む処理
  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      // 次の質問に進む
      setCurrentQuestion(currentQuestion + 1);
      setSelectedKeys([]); // 選択キーをリセット
      setShowAnswer(false); // 回答表示をリセット
      setIsCorrect(false); // 正解フラグをリセット
    } else {
      // 全ての質問が終了した場合
      setQuizCompleted(true); // クイズ完了フラグを設定
    }
  };

  // クイズを再スタートする処理
  const handleRestartQuiz = () => {
    setCurrentQuestion(0); // 質問インデックスをリセット
    setScore(0); // スコアをリセット
    setSelectedKeys([]); // 選択キーをリセット
    setShowAnswer(false); // 回答表示をリセット
    setIsCorrect(false); // 正解フラグをリセット
    setQuizCompleted(false); // クイズ完了フラグをリセット
    setQuizRestarted(true); // クイズ再開フラグを設定
  };

  // 2つの配列が等しいか（正解かどうか）をチェックする関数
  const arraysEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  };

  // クイズの内容をレンダリングする関数
  const renderQuizContent = () => {
    if (quizCompleted) {
      // クイズが完了した場合の表示
      return (
        <div className="quiz-center">
          <div className="end">
            <h2>お疲れ様です！</h2>
            <p>スコアは {score} ／１０点です！</p>
          </div>
          <button onClick={handleRestartQuiz} className="answer-button">もう一度</button>
        </div>
      );
    }

    if (quizRestarted) {
      // クイズが再スタートされた場合の処理
      setQuizRestarted(false); // 再スタート状態をリセット
    }

    // クイズのメインコンテンツの表示
    return (
      <>
        <div className="quiz-center">
          <div className="quiz-header">
            <img src={Icon} alt="Icon" className='icon' />
            <h1>VSCode ショートカット クイズ！</h1>
          </div>
          {!showAnswer && (
            // 質問とキーボードインターフェースの表示
            <QuizQuestion
              question={questions[currentQuestion].question}
              keyboardRows={keyboardRows}
              handleKeyClick={handleKeyClick}
              selectedKeys={selectedKeys}
            />
          )}
          {showAnswer && (
            // 回答フィードバックの表示
            <div className={`answer-feedback ${isCorrect ? "correct" : "incorrect"}`}>
              {isCorrect ? "正解です！" : "不正解です。"} 正解は {questions[currentQuestion].correctAnswer} です。
            </div>
          )}
          <button onClick={showAnswer ? handleNextQuestion : handleCheckAnswer} className="answer-button">
            {showAnswer ? "次の問題へ" : "回答する"}
          </button>
        </div>
      </>
    );
  };

  return <div className="quiz-container">{renderQuizContent()}</div>;
};

export default Quiz;
