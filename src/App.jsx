import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // react-router-domからルーター関連のコンポーネントをインポート
import './style-sheets/App.css'; // アプリ全体のスタイルシートをインポート
import Profile from './profile'; // Profileコンポーネントをインポート
import Quiz from './components/Quiz.jsx'; // Quizコンポーネントをインポート

function App() {
  return (
    <Router> {/* HashRouterを使用してアプリのルーティングを管理する */}
      <div className="App">
        <Routes> {/* ルートを定義するためのコンテナ */}
          <Route path="/quiz" element={<Quiz />} /> {/* "/quiz" パスに対応するQuizコンポーネントを表示 */}
          <Route path="/" element={<Profile />} /> {/* ルートパス ("/") に対応するProfileコンポーネントを表示 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App; // Appコンポーネントをエクスポートして他のファイルで使用可能にする
