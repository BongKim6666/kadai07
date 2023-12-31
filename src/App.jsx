// import

// import "□□□"
// import "ファイルパス or パッケージ名"
// import './App.css'

// import ◯◯◯ from "□□□"
// import 名前 from "ファイル"
// const 名前 = 0

// import { △△△ } from "□□□"
// const obj = {a: 0, b: 1}
// console.log(obj.a);

// const {a, b } = {a: 0, b: 1}
// console.log(a);

// パッケージを使えるようにしている

import "./App.css";

function App() {
  // const [count, setCount] = useState(0)
  // const [list, setList] = useState([])

  return (
    <div className="wrapper">
      <div className="pic">
        <img src="./sponge-bob.jpg" alt="sb" />
      </div>
      <div className="intro">
        <h2>スポンジ バカ</h2>
        <p>
          スポンジバカは、海底ビキニボトムでの騒動の中心的存在。彼の楽天的な性格と不思議な冒険精神は、常に笑いと驚きをもたらします。おバカでかわいらしい彼は、友情とポジティブなエネルギーの塊です！
        </p>
      </div>
    </div>
  );
}

export default App;
