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