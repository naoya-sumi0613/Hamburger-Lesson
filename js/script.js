$(function() {

	$('.menu-trigger').on('click', function(event) {

    //.toggleClassは指定されているclass('active')をトグル処理する
    //トグル処理とはclass属性がある場合はclassが削除されない場合はclassを追加する
    $(this).toggleClass('active');

    //.fadeToggleは要素のフェードイン・フェードアウトを切り替えるメソッド
		$('#sp-menu').fadeToggle();
		event.preventDefault();
	});
});