let log = new Log(document.querySelector('.log'));
// knight // sorcerer
let char = new sorcerer ('Fernando');
// litterMoster // BigMonster
let monster = new BigMonster();

const stage  = new Stage (
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
);
stage.start();