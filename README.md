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

- データをバインディングする
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

- チェックボックスを追加する

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