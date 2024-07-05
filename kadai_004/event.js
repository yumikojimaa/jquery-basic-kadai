// ドキュメントの読み込み完了後に実行する処理
$(window).on('load', function() {
  console.log('loadイベントが発生しました');
});

// ページをスクロールした時に実行する処理
$(window).on('scroll', function() {
  console.log('scrollイベントが発生しました');
});