// jQueryを使ってDOMの準備ができたら実行する
$(document).ready(function() {
  // 「クリック」ボタンがクリックされた時の処理
  $('.btn').click(function() {
      // テキストボックスに「クリックしました！」と表示する
      $('.text-box').val('クリックしました！');
  });
});