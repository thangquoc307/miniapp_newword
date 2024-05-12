class LearningScript {
    vnese;
    jpese;
    constructor(vnese, jpese) {
        this.vnese = vnese;
        this.jpese = jpese;
    }
}
let data;
let index;
let vj = true;

let lesson11 = [
    new LearningScript("あか", "red"),
    new LearningScript("いろいろ", "various"),
    new LearningScript("おさけ", "alcohol/sake (Japanese rice wine)"),
    new LearningScript("おちゃ", "tea/Japanese tea"),
    new LearningScript("おにぎり", "onigiri (rice ball)"),
    new LearningScript("おねがいします", "Please./Please do."),
    new LearningScript("おべんとう", "boxed lunch"),
    new LearningScript("からあげ", "fried chicken"),
    new LearningScript("ごみぶくろ", "trash bag"),
    new LearningScript("さら", "dish/plate"),
    new LearningScript("しろ", "white"),
    new LearningScript("そと", "out/outside/outdoors"),
    new LearningScript("それから", "and then"),
    new LearningScript("たまごやき", "(Japanese-style) omelet/rolled egg"),
    new LearningScript("どっち", "which (out of two, and casual style of speech)"),
    new LearningScript("にほんしゅ", "Japanese sake/rice wine"),
    new LearningScript("のみもの", "drink"),
    new LearningScript("はし", "chopsticks"),
    new LearningScript("ほか", "other"),
    new LearningScript("もちます", "to have/to carry"),
    new LearningScript("もの", "thing(s)/goods"),
    new LearningScript("らいしゅう", "next week"),
    new LearningScript("りんご", "apple"),
    new LearningScript("コップ", "glass/cup"),
    new LearningScript("サラダ", "salad"),
    new LearningScript("サンドイッチ", "sandwich"),
    new LearningScript("シート", "(waterproof tarpaulin) sheet"),
    new LearningScript("ジュース", "juice"),
    new LearningScript("チョコレート", "chocolate"),
    new LearningScript("バナナ", "banana"),
    new LearningScript("ビール", "beer"),
    new LearningScript("ピクニック", "picnic"),
    new LearningScript("ポテトチップス", "potato chips"),
    new LearningScript("メモ", "memo"),
    new LearningScript("ワイン", "wine"),
    new LearningScript("～に します", "(I) will choose～./ (I) will decide on～."),
]
let lesson12 = [
    new LearningScript("あじ", "taste/flavor"),
    new LearningScript("あまい", "sweet"),
    new LearningScript("ありがとう", "Thank you."),
    new LearningScript("いただきます", "Thank you./I accept. (Said before starting to eat or drink /a polite way to say \"\"moraimasu\"\".)"),
    new LearningScript("いっぱい", "full/having had enough"),
    new LearningScript("うめぼし", "pickled plum"),
    new LearningScript("えび", "shrimp"),
    new LearningScript("えびせんべい", "shrimp/prawn rice cracker"),
    new LearningScript("おなか", "belly/stomach"),
    new LearningScript("からい", "hot/spicy/salty"),
    new LearningScript("きゅうり", "cucumber"),
    new LearningScript("こんぶ", "sea weed"),
    new LearningScript("しゃけ／さけ", "salmon"),
    new LearningScript("しょっぱい", "salty"),
    new LearningScript("すっぱい", "sour"),
    new LearningScript("ぜんぜん", "not at all"),
    new LearningScript("それ", "that"),
    new LearningScript("たまご", "egg"),
    new LearningScript("つけもの", "pickles"),
    new LearningScript("でも", "but"),
    new LearningScript("はいります", "to enter/to get into"),
    new LearningScript("まんじゅう", "a steamed (bean-jam) bun"),
    new LearningScript("もう　いっぱい", "another (cup/glass/plate)"),
    new LearningScript("もう　けっこうです", "No, thank you. (to reply \"How about another cup/piece?\")"),
    new LearningScript("もう　すこし", "a little more"),
    new LearningScript("もう　ひとつ", "another/one more"),
    new LearningScript("よかったら", "If you'd like"),
    new LearningScript("わさび", "wasabi (Japanese horseradish)"),
    new LearningScript("アンチョビ", "anchovy/anchovies"),
    new LearningScript("キムチ", "kimuchi/kimchee (Korean style pickles) "),
    new LearningScript("キンパッ", "Kimpa (name of Korean dish similar to rolled Sushi.)"),
    new LearningScript("クロッポ", "keropok (Malaysia shrimp cracker)"),
    new LearningScript("スープ", "soup"),
    new LearningScript("チーズ", "cheese"),
    new LearningScript("ツナ", "tuna"),
    new LearningScript("トマト", "tomato"),
    new LearningScript("ハム", "ham"),
    new LearningScript("ピクルス", "pickles"),
    new LearningScript("レモン", "lemon"),
    new LearningScript("（もう　すこし）どうですか", "How about (a little more)?"),
]
let lesson13 = [
    new LearningScript("あたらしい", "new"),
    new LearningScript("いかがでしたか", "How was it?"),
    new LearningScript("おつかれさまでした", "Good work./Nice job./You must be tired."),
    new LearningScript("おまたせしました", "Sorry to keep you waiting."),
    new LearningScript("おゆ", "hot water"),
    new LearningScript("かいぎ", "meeting"),
    new LearningScript("かいてき（な）", "comfortable "),
    new LearningScript("かぎ", "key"),
    new LearningScript("くうこう", "airport"),
    new LearningScript("こうじょう", "factory"),
    new LearningScript("ししゃ", "branch office"),
    new LearningScript("しゅっぱつ", "departure"),
    new LearningScript("しります", "to know"),
    new LearningScript("じさ", "time difference"),
    new LearningScript("すきます", "not full/not crowded"),
    new LearningScript("ずっと", "all the time"),
    new LearningScript("だい～", "number～/No.～"),
    new LearningScript("つかれます", "to get tired"),
    new LearningScript("つきます", "to arrive"),
    new LearningScript("でます", "to get out/to go out"),
    new LearningScript("でむかえ", "to pick up someone/to greet"),
    new LearningScript("でんき", "light/electricity"),
    new LearningScript("とうちゃく", "arrival"),
    new LearningScript("ながい", "long"),
    new LearningScript("なし（ない）", "none"),
    new LearningScript("ばんごう", "number"),
    new LearningScript("ひる", "daytime/noon"),
    new LearningScript("びん", "(airline) flight"),
    new LearningScript("ほんしゃ", "head office"),
    new LearningScript("まあまあ（な）", "so so"),
    new LearningScript("もらいます", "to receive"),
    new LearningScript("もんだいないです", "No problem."),
    new LearningScript("ようこそ", "welcome."),
    new LearningScript("よく　おやすみください", "Take a good rest."),
    new LearningScript("オフィス", "office"),
    new LearningScript("オーケー", "OK"),
    new LearningScript("シャワー", "shower"),
    new LearningScript("スケジュール", "schedule"),
    new LearningScript("チェック", "check"),
    new LearningScript("ドライバー", "driver"),
    new LearningScript("フライト", "flight"),
    new LearningScript("メール", "e-mail"),
    new LearningScript("レストラン", "restaurant"),
    new LearningScript("ローマ", "Rome"),
    new LearningScript("～ごう", "(a counter for rooms)/room number～"),
    new LearningScript("～さま", "Mr. ; Ms.(NAME+sama]…is a very polite expression to call someone, and used not only with person's name but with one's his/ her post.)"),
    new LearningScript("～にち／か", "～th (day, used when saying dates)"),
    new LearningScript("～はん", "half-past～/～thirty"),
    new LearningScript("～ほん／ぽん／ぼん", "(a counter for thin and long thing)"),
]
let lesson14 = [
    new LearningScript("うけつけ", "front desk/reception"),
    new LearningScript("おせわに　なりました", "Thank you for everything."),
    new LearningScript("かります", "to  borrow"),
    new LearningScript("こくさいでんわ", "international phone call"),
    new LearningScript("こちら", "this way/this place (polite equivalent of ここ）"),
    new LearningScript("こちらこそ", "Same to you."),
    new LearningScript("これ", "this"),
    new LearningScript("こわれます", "to be broken"),
    new LearningScript("しゃちょう", "president of a company"),
    new LearningScript("じぶん", "oneself"),
    new LearningScript("じむ", "office work"),
    new LearningScript("それじゃあ、また", "See you, then."),
    new LearningScript("どうぞ　よろしく", "Please to meet you."),
    new LearningScript("はじめまして", "How do you do?/Nice to meet you."),
    new LearningScript("ひしょ", "secretary"),
    new LearningScript("べんきょうちゅう", "in the middle of studying"),
    new LearningScript("ぺらぺら（な）", "fluent"),
    new LearningScript("みおくり", "a send-off/seeing (a person) of"),
    new LearningScript("みなさん", "everyone"),
    new LearningScript("よろしく　おつたえください", "Please give my best regards."),
    new LearningScript("らいげつ", "next month"),
    new LearningScript("コピー", "copy"),
    new LearningScript("コピーき", "copy machine"),
    new LearningScript("コンピューター", "computer"),
    new LearningScript("スタッフ", "staf"),
    new LearningScript("ファックス", "fax"),
    new LearningScript("プリントアウト", "to print out"),
    new LearningScript("ペン", "pen"),
]

function randomData (dataArray) {
    index = 0;
    data = dataArray;
    data.sort((a, b) => Math.random() - 0.5);
    document.getElementById("count-false").innerText = "0";
    document.getElementById("count-true").innerText = "0";
    document.getElementById("count-total").innerText = dataArray.length;

    setupCard();
}
function setupCard () {
    let datacard = data[index];
    let hiddenItem = document.getElementById("data-2");

    document.getElementById("data-1").innerText = vj ? datacard.vnese : datacard.jpese;
    hiddenItem.innerText = !vj ? datacard.vnese : datacard.jpese;
    hiddenItem.className = "hidden";
}
function showhidden () {
    let hiddenItem = document.getElementById("data-2");
    hiddenItem.className = "";
}
function test (isSuccess) {
    if (index === data.length) {
        alert("Hết bài rồi")
    } else {
        index++;
        let countTrue = document.getElementById("count-true");
        let countFalse = document.getElementById("count-false");
        let countTotal = document.getElementById("count-total");

        countTotal.innerText = (+countTotal.innerText) - 1;
        if (isSuccess) {
            countTrue.innerText = (+countTrue.innerText) + 1;
        } else {
            countFalse.innerText = (+countFalse.innerText) + 1;
        }
        setupCard();
    }
}

randomData(lesson14);