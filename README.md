# Vue.js  ToDoListを作成しながら学習


## ファイルを構成する

- Vue.js-ToDoList-フォルダ内にindex.htmlファイルを作成する。
```
$ mkdir Vue.js-ToDoList-
$ touch index.html
```
- index.htmlファイルのレイアウトを構成する。

```
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>Vue.js ToDoList学習</title>
  <link rel="stylesheet" href="main.css">
</head>
<body>
  <div id="app"> (Vue.jsのアプリケーションを紐づける)

  </div>
  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.js"></script> (Vue.jsのCDNを設定)
  <script src="main.js"></script>

</body>
</html>
```
- `main.css`ファイルと`main.js`ファイルを作成する。
- `main.js`ファイル内を構成する。
```
const app = new Vue ({
   el: "#app",
   data: {
       //リアクティブ要素にするためのデータを追加
   }
})
```
- データ表示の確認  
  
Vue.jsのアプリケーションを紐づけたdivタグの中に`{{ データの名前 }}`を使用
```
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>Vue.js ToDoList学習</title>
  <link rel="stylesheet" href="main.css">
</head>
<body>
  <div id="app">
    {{ message }}
  </div>
  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.js"></script>
  <script src="main.js"></script>

</body>
</html>
```

Vueインスタンスの中でdataプロパティを定義する。

```
var app = new Vue ({
   el: "#app"
   data: {
       message: "Hello World",
   }
});
```
ブラウザ上で確認する。

## データをバインディングする
`{{ message }}`に`v-model`ディレクテブを追加する(入力したデータとバインディングしたいので`type=text`とし、テキストボックスを追加)。
```
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>Vue.js ToDoList学習</title>
  <link rel="stylesheet" href="main.css">
</head>
<body>
  <div id="app">
    <input type="text" v-model="message">
    {{ message }}
  </div>
  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.js"></script>
  <script src="main.js"></script>

</body>
</html>
```
ブラウザ上で確認する。

## チェックボックスを追加する

input要素に `v-model="true"` であればチェックがつき、 `v-model="false"` であればチェックがはずれ
る。
```
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>Vue.js ToDoList学習</title>
  <link rel="stylesheet" href="main.css">
</head>
<body>
  <div id="app">
    <input type="text" v-model="message">
    <input type="checkbox" v-model="isChecked">
    {{ message }} {{ isChecked }}
  </div>
  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.js"></script>
  <script src="main.js"></script>

</body>
</html>
```
```
var app = new Vue ({
   el: "#app",
   data: {
       message: "Hello World",
       isChecked: true
   },
})
```
ブラウザ上で確認する。

## リストを追加する

Vue.jsのアプリケーションを紐づけたdivタグの中に`v-for`ディレクティブを使用。
データオプション内に特定の配列を作成し、`v-for`で指定する。
```
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>Vue.js ToDoList学習</title>
  <link rel="stylesheet" href="main.css">
</head>
<body>
  <div id="app">
    <input type="text" v-model="message">
    <input type="checkbox" v-model="isChecked">
    {{ message }} {{ isChecked }}
    <ul>
      <li v-for="thing in things">{{ thing.title }}</li>
    </ul>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.js"></script>
  <script src="main.js"></script>

</body>
</html>
```

```
var app = new Vue ({   
   el: "#app",  
   data: {  
       message: "Hello World",  
       isChecked: true,  
       things: [  
        { title: 'やること1'},  
        { title: 'やること2'},  
        { title: 'やること3'},  
    ]  
   },  
})  
```
ブラウザ上で確認する。

## クリックイベントを追加する

ボタンをクリックする度に数が1ずつ増えていくイベントを追加してみる。  
Vue.jsのアプリケーションを紐づけたdivタグの中に`v-on:click`を使用する。  
`methods`オプションを作成し、その中で関数を定義する。  
データオプション内のデータは`this.データ名`で参照できる。  
```
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>Vue.js ToDoList学習</title>
  <link rel="stylesheet" href="main.css">
</head>
<body>
  <div id="app">
    <input type="text" v-model="message">
    <input type="checkbox" v-model="isChecked">
    {{ message }} {{ isChecked }}
    <ul>
      <li v-for="thing in things">{{ thing.title }}</li>
    </ul>
    {{ counter }}
    <button v-on:click="add">add</button>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.js"></script>
  <script src="main.js"></script>

</body>
</html>
```

```
var app = new Vue ({
   el: "#app",
   data: {
       message: "Hello World",
       isChecked: true,
       things: [
        { title: 'やること1'},
        { title: 'やること2'},
        { title: 'やること3'},
        
       ],
       counter: 0
   },
   methods: {
       add: function(){
           this.counter++
       },
   },
})
```
ブラウザ上で動作確認する。

## ToDoListの作成

上記で確認した機能を組み合わせて実際にToDoListを作成してみる。

- ToDoリストを表示させる
```
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>Vue.js ToDoList学習</title>
  <link rel="stylesheet" href="main.css">
</head>
<body>
  <div id="app">
    <input type="text" v-model="message">
    <ul>
      <li v-for="thing in things">
        <label>
          <input type="checkbox" v-model="thing.isChecked"> {{ thing.title }}
        </label>
      </li>  
    </ul>
    <button v-on:click="add">add</button>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.js"></script>
  <script src="main.js"></script>

</body>
</html>
```
リストのプロパティ内には下記の2点を入れる。
- ToDoリストの内容
- チェックボックスによる確認
```
var app = new Vue ({
   el: "#app",
   data: {
       things: [
        { title: 'やること1', isChecked: false,},
        { title: 'やること2', isChecked: false,},
        { title: 'やること3', isChecked: true,},
       ],
       counter: 0
   },
   methods: {
       add: function(){
           this.counter++
       },
   },
})
```
ブラウザで確認する。

- ToDoリストに新しいToDo要素を追加する

テキストボックス内に新しいToDo要素を入力し、追加ボタンをクリックした際にToDoリストに追加されるようにする。

`<div id="app">` 内の　テキストボックス内の要素と`<button>`タグの中身を下記を修正する。
```
<head>
  <meta charset="utf-8">
  <title>Vue.js ToDoList学習</title>
  <link rel="stylesheet" href="main.css">
</head>
<body>
  <div id="app">
    <h1>To Do List</h1>
    <ul>
      <li v-for="thing in things">
        <label>
          <input type="checkbox" v-model="thing.isChecked"> {{ thing.title }}
        </label>
      </li>  
    </ul>
    <input type="text" v-model="newthings">
    <button v-on:click="add">追加</button>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.js"></script>
  <script src="main.js"></script>

</body>
</html>
```

データ内に`newthings`を追加し`v-model`でバインディングする(入力した内容が追加されるようにしたいので値を空白に設定する)。  
追加ボタンを押したときにテキストボックスに入力された要素を既存の`thingリスト`に追加する関数を定義する(`v-on:click=関数名`でバインディング)

```
var app = new Vue ({
   el: "#app",
   data: {
       things: [
        { title: 'やること1', isChecked: false,},
        { title: 'やること2', isChecked: false,},
        { title: 'やること3', isChecked: true,},
       ],   
       newthings:"",
   },
   methods: {
       add: function(){
           this.things.push({
               title: this.newthings,
               isChecked: false,
           });
       },
   },
})
```
追加ボタンを押すとテキストボックス内に入力した文字が残ってしまうので残らないようにする。
`add`関数の最後にその処理を追加する。
```
var app = new Vue ({
   el: "#app",
   data: {
       things: [
        { title: 'やること1', isChecked: false,},
        { title: 'やること2', isChecked: false,},
        { title: 'やること3', isChecked: true,},
       ],   
       newthings:"",
   },
   methods: {
       add: function(){
           this.things.push({
               title: this.newthings,
               isChecked: false,
           });
           this.newthings = "";
       },
   },
})
```