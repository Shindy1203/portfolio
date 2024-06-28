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
            <li>・HTML、CSS</li>
          </ul>
          <p className='status'>現在の状況</p>
          <div className='text'>
            令和６年３月より静岡職業能力開発センター<br />
            IoTシステムエンジニア科にて、プログラム<br />
            やネットワーク技術を学習しています。<br />
            paizaラーニングではAランクまで獲得し、<br />
            ７月に基本情報技術者試験を受験します。<br />
            学んだことをインプットだけではなく、<br />
            アウトプットし利用者のフィードバックを<br />
            もとに、より使用性の高いシステム開発を<br />
            行うエンジニアを目指します。
          </div>
          <p className='career'>キャリアビジョン</p>
          <div className='text'>
            エンジニアとしてスキルアップを継続しつつ<br />
            前職での経験を活かし、マネジメント業務も<br />
            行っていきたいです。
          </div>
          <div className='user'>
            <p className='use'><u>アプリの使い方</u></p>
            <div className='text'>
              ➀ショートカットキーが出題されます<br />
              ➁対応するキーを全てクリックします<br />
              ➂『回答する』ボタンをクリックします<br />
              ➃正解 / 不正解が表示されます<br />
              ➄１０問解くとスコアが表示されます
            </div>
          </div>
        </section>

        <section className="portfolio-section">
          <h2>ポートフォリオ</h2>
          <p>概要</p>
          <div className='text'>
            V.S.Codeで使用できるショートカット<br />
            のクイズゲームアプリです。<br />
          </div>
          <p>開発環境:</p>
          <div className='text'>
            エディタ:V.S.Code<br />
            React(jsx)、HTML、CSS<br />
            GitHubを活用して公開
          </div>
          <p>制作理由:</p> 
          <div className='text'>
            ➀ショートカットキーを使いこなすことで<br />
            &emsp;効率的な業務が可能となるため。<br />
            ➁自分以外の人にも利用して貰える<br />
            &emsp;アプリケーションを作りたかったため。<br />
            ➂訓練所での学習だけでなく、自己学習を含<br />
            &emsp;めたアウトプットとするため。
          </div>
          <p className='point'>制作アプリのポイント：</p>
          <div className='text'>
            ➀<u>実用性</u><br />
            実際のキーボードと同じ配置にすることで<br />
            より実践的な学習ができる。<br />
            ➁<u>拡張性</u><br />
            キーボードのボタン配置やクイズ問題は<br />
            別ファイルで作成して利用しているため<br />
            新しい問題の追加や、MAC用のキーボード<br />
            などの追加が容易に行える。<br />
          </div>
          <p>今後追加する機能:</p>
          <div className='text'>
            Javaを使用したデータベース管理。<br />
            具体的には、会員登録/ログイン機能を実装<br />
            し個々の点数をデータとして管理する。
          </div>
        </section>
      </div>
      <footer>
        <div className='foot'>↓ ここからアプリを開始できます</div>
        <Link to="/quiz" className="quiz-link" target="_blank">V.S.Codeショートカット</Link>
        <br />
        <div className="link-container">
          <a href="https://github.com/Shindy1203/portfolio/commit/664a86c5404e0688bd4fd742316f020445a68bae" className="source-code-link" target="_blank">ソースコードはこちらから</a>
          <a href="https://github.com/Shindy1203/portfolio/blob/main/%E3%83%9D%E3%83%BC%E3%83%88%E3%83%95%E3%82%A9%E3%83%AA%E3%82%AA%E3%81%AE%E8%AA%AC%E6%98%8E.pdf" className="pdf-link" target="_blank">フローチャートはこちらから</a>
        </div>
      </footer>
    </div>
  );
};

export default Profile;
