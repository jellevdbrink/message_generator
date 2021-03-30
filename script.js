const randString = {
    _stringStart: ['ate', 'shot', 'loved', 'surrendered to', 'bought', 'acted like a 2 year old in front of', 'sat on', 'made pancakes for', 'threw grapes at', 'scared', 'ran away from', 'burned my cookies for'],
    _stringMid: ['a very important person', 'the rainbow', 'my english teacher', 'steak', 'a pedo', 'your mom', 'your peers', 'thejkb', 'my life', 'Russia', 'Taylor Swift', 'my salmon'],
    _stringEnd: ["I'm loving your hair", "I'm a belieber", "I'm so cool", 'there was someone TALKING', 'we tried', 'you ate my uncle', 'I honestly have rabies', 'we all mess up sometimes','you threw up on my car', 'you remind me of spiders', 'I love you'],
    get stringStart() {
        return this._stringStart;
    },
    set stringStart(newStr) {
        if (newStr && typeof newStr === 'string') {
            this._stringStart.push(newStr);
            return true;
        } else {
            return false;
        }
    },
    get stringMid() {
        return this._stringMid;
    },
    set stringMid(newStr) {
        if (newStr && typeof newStr === 'string') {
            this._stringMid.push(newStr);
            return true;
        } else {
            return false;
        }
    },
    get stringEnd() {
        return this._stringEnd;
    },
    set stringEnd(newStr) {
        if (newStr && typeof newStr === 'string') {
            this._stringEnd.push(newStr);
            return true;
        } else {
            return false;
        }
    },
    generate () {
        const start = this._stringStart[Math.floor(Math.random() * this._stringStart.length)];
        const mid = this._stringMid[Math.floor(Math.random() * this._stringMid.length)];
        const end = this._stringEnd[Math.floor(Math.random() * this._stringEnd.length)];

        return `I ${start} ${mid} because ${end}!`
    }
};

console.log(randString.generate());