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

randomData(lesson11);