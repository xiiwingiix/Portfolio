var card 		  =	{},
    tmp 			= [],
    timeStart = 0,
    timeEnd 	= 0,
    timeGap 	= 0,
    clickCnt 	= 0
;

//카드 정보
var card_img_array = [{
    chr_name : '라이언', url : 'https://i.pinimg.com/474x/3d/05/3e/3d053ec5fe49208e6e5af4953eed1f7d.jpg'
    },{
    chr_name : '무지',   url : 'https://i.pinimg.com/236x/38/b5/d7/38b5d70a17f37035e0660f1cd00013dd.jpg'
    },{
    chr_name : '어피치', url : 'https://i.pinimg.com/236x/e0/d9/e6/e0d9e6d85b5240a8f00b8cc8ad3077ad.jpg'
    },{
    chr_name : '포르도', url : 'https://i.pinimg.com/736x/1f/b5/5c/1fb55c1fc3719bdf3b551562d801045d.jpg'
    },{
    chr_name : '네오',   url : 'https://i.pinimg.com/474x/4f/a1/49/4fa149b04831f61212b25d83f76be780.jpg'
    },{
    chr_name : '튜브',  url : 'https://i.pinimg.com/736x/e1/de/ff/e1deff96462bdb20f3c3c5ed6ba44d2f.jpg'
    },{
    chr_name : '제이지', url : 'https://i.pinimg.com/736x/4d/ca/de/4dcade9c6211cc838bb807d31121ff9b.jpg'
    },{
    chr_name : '콘',    url : 'https://i.pinimg.com/474x/2a/4c/6e/2a4c6edbcef5b4b785e22fe3a3414c87.jpg'
    }]
;

card = {
parent : new Object(), //객체 생성
info : new Object(), //객체 생성
level: '', //카드 갯수
delay : 1000,

create : function(){ //카드 생성 함수

    var cardNum = 0, //총 카드 갯수
        flip_card = '', //플립카드 생성
        cardArray = new Array()
    ;

    //카드 초기화
    $('.card_list').html('');
    $('.time').text('');

    this.level = Number($('.level').val()); //카드 수

    cardNum = this.level/2;//2 : 캐릭터 수

    //캐릭터 램덤하게 뽑기, 카드 수 채우기
    for(var i = 0; i < cardNum; i++){
        cardArray[i]  = card_img_array[Math.floor(Math.random() * card_img_array.length)];
        cardArray[i+cardNum] = cardArray[i] ;
        for(var j = 0; j < i ; j++){ //중복 값 제거
            if(cardArray[i] == cardArray[j]){
                i--;
                break;
            }
        }
    }

    //카드 램덤하게 배열하기
    cardArray.sort(function() {
        return Math.random() - .5;
    });

    //카드 생성
    for(var i = 0; i < this.level; i++){
        flip_card += 
        `
          <li class="flip_wrap">
            <div class="flip_card one">
              <div class="front" style="background-color: #000;"></div>
              <div class="back" chr_name = "${cardArray[i].chr_name}" style="background-image : url(${cardArray[i].url})"></div>
            </div>';
          </li>
        `
    }
    
    //카드 삽입
    $('.card_list').append(flip_card); 

    //시간 측정 시작
    timeStart = new Date()/1000;
    card.parent.find('.flip_wrap').bind("click",card.click);

},
click : function(){
    var clicked_card 	= $(this).find('.back').attr('chr_name');
    var card_num 			= $(this).index();
    clickCnt ++ ; //클릭 수 증가

    $(this).css('transform','rotateY(180deg)'); //클릭 시 카드 회전
    setTimeout(function(){

        if(!tmp.length){

            tmp.push(clicked_card);

        }else if(tmp[0] == clicked_card){
            card.parent.find('.back[chr_name=' + clicked_card + ']').closest('.flip_wrap').remove();
            if ($('.flip_wrap').length == 0){
                card.end();
                $('.msg').show();
                $('.time').html('걸린시간 : '+ timeGap).show();
                $('.clck_cnt').html('클릭수 : '+ clickCnt).show();
            };
            tmp = [];
        }else{
            card.parent.find('.flip_wrap').css('transform','rotateY(0deg)');
            tmp = [];
        }
    },500);

    return false;

},
end : function(){
    timeEnd = new Date()/1000;
    timeGap = Math.floor((timeEnd - timeStart)  / 60) + '분'+ Math.floor((timeEnd - timeStart) % 60 ) + '초';

},
fail : function(){

    //수행 시간 측정
    card.end();
    $('.time').html('수행 시간 : '+ timeGap).show();

    return false;

},
//세팅
init : function(){ 
    this.parent = $('.card_list');
    this.info = $('.card_info');
    this.level = $('.level').val();
    this.create();

    $('.msg, .clck_cnt, .time').hide();
},
}


$(document).ready(function(){
  card.init();

  return false;
}); //ready

$(document).on('click', '.btn_create', function(){
  card.init();

  return false;
}); //create


$(document).on('click','.btn_giveUp', function(){
  card.fail();

  return false;
}); 
