import { Link } from 'react-router-dom';
import './style-sheets/profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <header>
        <p className='title'>- Welcome to My Portfolio -</p>
      </header>


      <div className="content-container">
        <section className="profile-section">
          <h2>プロフィール</h2>
          <p className='name'>氏名： 木 村 信 治</p>
          <p className='study'>学習したプログラム言語</p>
          <ul>
            <li>・C言語</li>
            <li>・Java</li>
            <li>・Java Script</li>
          </ul>
          <p className='status'>現在の状況</p>
          <div className='text'>
            令和６年３月より静岡職業能力開発センター<br></br>
            IoTシステムエンジニア科にて、プログラム<br></br>
            やネットワーク技術を学習しています。<br></br>
            paizaラーニングではAランクまで獲得し、<br></br>
            ７月に基本情報技術者試験を受験します。<br></br>
            学んだことをインプットだけではなく、<br></br>
            アウトプットし利用者のフィードバックを<br></br>
            もとに、より使用性の高いシステム開発を<br></br>
            行うエンジニアを目指します。
          </div>
          <p className='career'>キャリアビジョン</p>
          <div className='text'>
            エンジニアとしてスキルアップを継続しつつ<br></br>
            前職での経験を活かし、マネジメント業務も<br></br>
            行っていきたいです。
          </div>
          <div className='user'>
            <p className='use'><u>アプリの使い方</u></p>
            <div className='text'>
              ➀ショートカットキーが出題されます<br></br>
              ➁対応するキーボードを全てクリックします<br></br>
              ➂『回答する』ボタンをクリックします<br></br>
              ➃正解 / 不正解が表示されます<br></br>
              ➄１０問解くとスコアが表示されます
            </div>
          </div>
        </section>

        <section className="portfolio-section">
          <h2>ポートフォリオ</h2>
            <p>概要</p>
              <div className='text'>
              V.S.Codeで使用できるショートカット<br></br>
              のクイズゲームアプリです。<br></br>
              </div>
              <p>開発環境:</p>
              <div className='text'>
                エディタ:V.S.Code<br></br>
                React(jsx)、HTML、CSS<br></br>
              </div>
              <p>制作理由:</p> 
              <div className='text'>
                ➀ショートカットキーを使いこなすことで<br></br>
                &emsp;効率的な業務が可能となるため。<br></br>
                ➁自分以外の人にも利用して貰える<br></br>
                &emsp;アプリケーションを作りたかったため。<br></br>
                ➂訓練所での学習だけでなく、自己学習を含<br></br>
                &emsp;めたアウトプットとするため。
              </div>
              <p className='point'>制作アプリのポイント：</p>
              <div className='text'>
                ➀<u>実用性</u><br></br>
                  実際のキーボードと同じ配置にすることで<br></br>
                  より実践的な学習ができる。<br></br>
                ➁<u>拡張性</u><br></br>
                  キーボードのボタン配置やクイズ問題は<br></br>
                  別ファイルで作成して利用しているため<br></br>
                  新しい問題の追加や、MAC用のキーボード<br></br>
                  などの追加が容易に行える。<br></br>
              </div>
              <p>今後追加する機能:</p>
              <div className='text'>
                Javaを使用したデータベース管理。<br></br>
                具体的には、会員登録/ログイン機能を実装<br></br>
                し個々の点数をデータとして管理する。
              </div>
        </section>
      </div>
      <footer>
        <div className='foot'>↓ ここからアプリを開始できます</div>
        <Link to="/quiz" className="quiz-link">V.S.Codeショートカット</Link>
      </footer>
    </div>
  );
};

export default Profile;
