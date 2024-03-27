const char = crateKnight('Fernando');
const monster = crateLittleMonster();
stage.start(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster')
);