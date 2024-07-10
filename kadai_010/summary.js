$(document).ready(function() {
  // 文字色変化
  $('#change-color').click(function() {
      $('#target').css('color', 'red'); // 任意の色を設定
  });

  // 文字内容変化
  $('#change-text').click(function() {
      $('#target').text('Hello!'); // 任意の文字内容を設定
  });

  // フェードアウト
  $('#fade-out').click(function() {
      $('#target').fadeOut();
  });

  // フェードイン
  $('#fade-in').click(function() {
      $('#target').fadeIn();
  });
});
