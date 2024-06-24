/* クイズ出題のコンポーネント */

const QuizQuestion = ({
  question,         //現在の質問テキスト
  keyboardRows,     //キーボードの各行の配列
  handleKeyClick,   //キーがクリックされた時に実行される関数
  selectedKeys,     //ユーザーが選択したキーの配列
}) => {
  return (
    <div>   
      <h2 className="quiz-question">{question}</h2> 
      {keyboardRows.map((row, rowIndex) => (  
        <div key={rowIndex} className="keyboard-row">
          {row.map((key, index) => (
            <button
              key={index}
              onClick={() => handleKeyClick(key)}   //ボタンのクリック時にhandleKeyClickを呼び出す
              className={`quiz-button ${            //ボタンのクラス名を設定
                selectedKeys.includes(key) ? "selected" : ""    //選択されたキーなら"selected"クラスを追加
              }`}
            >
              {key}     
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default QuizQuestion;
