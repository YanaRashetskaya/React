let wordsJSON = `[
    {"id":"1","number":"1","english":"stork","transcription":"[ stɔːk ]","russian":"аист","tags":"животные"},
    {"id":"2","number":"2","english":"shark","transcription":"[ ʃɑːk ]","russian":"акула","tags":"животные, еда"},
    {"id":"3","number":"3","english":"antelope","transcription":"[ ˈæntɪləʊp ]","russian":"антилопа","tags":"животные"},
    {"id":"4","number":"4","english":"butterfly","transcription":"[ ˈbʌtəflaɪ ]","russian":"бабочка","tags":"животные"},
    {"id":"5","number":"5","english":"hedgehog","transcription":"[ ˈhedʒhɒɡ ]","russian":"ёж","tags":"животные"},
    {"id":"6","number":"6","english":"library","transcription":"[ ˈlaɪbrəri ]","russian":"библиотека","tags":"город"},
    {"id":"7","number":"7","english":"lost property office","transcription":"[ lɒst ˈprɒpəti ˈɒfɪs ]","russian":"бюро находок", "tags":"город"},
    {"id":"8","number":"8","english":"gallery","transcription":"[ ˈɡæləri ]","russian":"галерея","tags":"город, путешествия"},
    {"id":"9","number":"9","english":"traffic","transcription":"[ ˈtræfɪk ]","russian":"движение","tags":"город"},
    {"id":"10","number":"10","english":"cinema","transcription":"[ ˈsɪnəmə ]","russian":"кино","tags":"город"},
    {"id":"11","number":"11","english":"accompany","transcription":"[ tuː əˈkʌmpəni ]","russian":"аккомпанировать","tags":"музыка"},
    {"id":"12","number":"12","english":"bagpipe","transcription":"[ ˈbægpaɪp ]","russian":"волынка","tags":"музыка"},
    {"id":"13","number":"13","english":"balalaika","transcription":"[ ˌbæləˈlaɪkə ]","russian":"балалайка","tags":"музыка, культура"},
    {"id":"14","number":"14","english":"bassoon","transcription":"[ bə'suːn ]","russian":"фагот","tags":"музыка"},
    {"id":"15","number":"15","english":"baton","transcription":"[ ˈbætən ]","russian":"дирижерская палочка","tags":"музыка"}
    ]
    `;
    
let initialWords = JSON.parse(wordsJSON);
export default initialWords;