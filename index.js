//This code is obfuscated for protection
const _0x20fb16 = _0x30c1;
function _0x228f() {
    const _0x39b750 = [
        '9JlPEXN',
        '<html\x20style=\x27font-family:system-ui\x27><center>To\x20generate\x20an\x20M3U\x20from\x20USTVGO.TV,\x20search\x20for\x20the\x20channel\x20by\x20visiting\x20/get/\x20(It\x20must\x20be\x20the\x20channels\x20code)<br><br>Example:\x20',
        ')\x20was\x20not\x20found\x20on\x20USTVGO\x27s\x20directory<br><br>Here\x20is\x20the\x20list\x20of\x20channels\x20to\x20search\x20for:<br>',
        'hls_src=\x27',
        'split',
        'length',
        'Router',
        'host',
        'protocol',
        'channels.txt',
        '://',
        '7flnSbo',
        '502412wNsrmg',
        'providedName',
        '871085zoTlYM',
        '258016zOjjNQ',
        '\x22,\x20',
        'node-fetch',
        'then',
        'redirect',
        '.m3u',
        'Copyright\x202022,\x20Brian\x20Walczak,\x20All\x20rights\x20reserved.',
        'express',
        'use',
        '#EXTINF:-1\x20tvg-id=\x22',
        'includes',
        '<html\x20style=\x27font-family:system-ui\x27>The\x20channel\x20that\x20you\x20searched\x20for\x20(',
        '\x20|\x20',
        'status',
        'listen',
        '438324AzvcWg',
        '<html\x20style=\x27font-family:system-ui\x27>File\x20was\x20saved\x20as\x20',
        '</html>',
        'text',
        '2109976uRvaPB',
        '<br>',
        'send',
        '/get/:providedName',
        '974592rfhwxi',
        'get',
        'GET',
        '/get/FoodNetwork<br><br><small>Copyright\x202022,\x20Brian\x20Walczak,\x20All\x20rights\x20reserved.</small></center></html>',
        'log',
        'utf8',
        'params',
        'readFile',
        'USTVGO\x20Scraper\x20is\x20at\x20localhost:3000\x20(port\x203000)',
        'https://ustvgo.tv/',
        'undefined',
        '47633ImkWmv'
    ];
    _0x228f = function () {
        return _0x39b750;
    };
    return _0x228f();
}
function _0x30c1(_0x5ea753, _0x163fe9) {
    const _0x228fb6 = _0x228f();
    _0x30c1 = function (_0x30c1b0, _0x49734f) {
        _0x30c1b0 = _0x30c1b0 - 0x1ec;
        let _0x23b9da = _0x228fb6[_0x30c1b0];
        return _0x23b9da;
    };
    return _0x30c1(_0x5ea753, _0x163fe9);
}
(function (_0x5412f3, _0x323c1c) {
    const _0x379e6b = _0x30c1;
    const _0x3690e5 = _0x5412f3();
    while (!![]) {
        try {
            const _0x8a1848 = -parseInt(_0x379e6b(0x20f)) / 0x1 + parseInt(_0x379e6b(0x1ed)) / 0x2 + parseInt(_0x379e6b(0x204)) / 0x3 + parseInt(_0x379e6b(0x21c)) / 0x4 + -parseInt(_0x379e6b(0x1ec)) / 0x5 + -parseInt(_0x379e6b(0x1fc)) / 0x6 * (-parseInt(_0x379e6b(0x21b)) / 0x7) + parseInt(_0x379e6b(0x200)) / 0x8 * (-parseInt(_0x379e6b(0x210)) / 0x9);
            if (_0x8a1848 === _0x323c1c) {
                break;
            } else {
                _0x3690e5['push'](_0x3690e5['shift']());
            }
        } catch (_0x3476a4) {
            _0x3690e5['push'](_0x3690e5['shift']());
        }
    }
}(_0x228f, 0x28c14));
const fetch = (..._0x4a753c) => import(_0x20fb16(0x1ef))[_0x20fb16(0x1f0)](({default: _0x40ef60}) => _0x40ef60(..._0x4a753c));
const readline = require('readline');
const express = require(_0x20fb16(0x1f4));
const router = express[_0x20fb16(0x216)]();
const fs = require('fs');
const app = express();
router[_0x20fb16(0x205)]('/', function (_0x5c6947, _0xaa58e4) {
    const _0x4c52b6 = _0x20fb16;
    _0xaa58e4[_0x4c52b6(0x202)](_0x4c52b6(0x211) + (_0x5c6947[_0x4c52b6(0x218)] + _0x4c52b6(0x21a) + _0x5c6947[_0x4c52b6(0x205)](_0x4c52b6(0x217))) + _0x4c52b6(0x207));
});
app['use']('/', router);
router['get'](_0x20fb16(0x203), function (_0x291de1, _0x206d72) {
    const _0x3e6511 = _0x20fb16;
    if (_0x291de1[_0x3e6511(0x20a)][_0x3e6511(0x21d)] != null) {
        var _0x1696d2;
        fs[_0x3e6511(0x20b)](_0x3e6511(0x219), _0x3e6511(0x209), function (_0x341147, _0x244897) {
            const _0x11368b = _0x3e6511;
            var _0x25c995 = _0x244897[_0x11368b(0x214)]('\x0a');
            for (var _0x530065 = 0x0; _0x530065 < _0x25c995[_0x11368b(0x215)]; _0x530065++) {
                if (_0x25c995[_0x530065][_0x11368b(0x214)](_0x11368b(0x1f9))[0x1] == _0x291de1[_0x11368b(0x20a)][_0x11368b(0x21d)]) {
                    _0x1696d2 = _0x25c995[_0x530065];
                    name = _0x1696d2[_0x11368b(0x214)]('\x20|\x20')[0x0];
                    code = _0x1696d2[_0x11368b(0x214)]('\x20|\x20')[0x1];
                    logo = _0x1696d2[_0x11368b(0x214)](_0x11368b(0x1f9))[0x2];
                    id = _0x1696d2[_0x11368b(0x214)](_0x11368b(0x1f9))[0x3];
                    fetch('https://ustvgo.tv/player.php?stream=' + code, {
                        'method': _0x11368b(0x206),
                        'headers': { 'Referer': _0x11368b(0x20d) }
                    })[_0x11368b(0x1f0)](_0x195977 => _0x195977[_0x11368b(0x1ff)]())[_0x11368b(0x1f0)](_0x115451 => {
                        const _0x16dd7d = _0x11368b;
                        if (_0x115451[_0x16dd7d(0x1f7)]('.m3u8') == !![]) {
                            link = _0x115451[_0x16dd7d(0x214)](_0x16dd7d(0x213))[0x1][_0x16dd7d(0x214)]('\x27')[0x0];
                        } else {
                            link = 'https://raw.githubusercontent.com/benmoose39/YouTube_to_m3u/main/assets/moose_na.m3u';
                        }
                        m3uTXT = _0x16dd7d(0x1f6) + code + '\x22\x20group-title=\x22ustvgo\x22\x20tvg-logo=\x22' + logo + _0x16dd7d(0x1ee) + name + '\x0a' + link;
                        var _0x16b2d9 = name['trim']() + _0x16dd7d(0x1f2);
                        fs['writeFile'](_0x16b2d9, m3uTXT, _0x2f1b2f => {
                            const _0x5e46c3 = _0x16dd7d;
                            if (_0x2f1b2f)
                                throw _0x2f1b2f;
                            _0x206d72['send'](_0x5e46c3(0x1fd) + (__dirname + _0x16b2d9) + '<br><br><br>File\x20Contents:<br>' + m3uTXT + '</html>');
                        });
                    });
                }
            }
            if (typeof _0x1696d2 === _0x11368b(0x20e)) {
                var _0x2ed0e0;
                for (var _0x530065 = 0x0; _0x530065 < _0x25c995[_0x11368b(0x215)]; _0x530065++) {
                    _0x2ed0e0 = _0x2ed0e0 + (_0x25c995[_0x530065][_0x11368b(0x214)](_0x11368b(0x1f9))[0x1] + '\x20(' + _0x25c995[_0x530065][_0x11368b(0x214)](_0x11368b(0x1f9))[0x0] + ')') + _0x11368b(0x201);
                }
                _0x206d72['send'](_0x11368b(0x1f8) + _0x291de1['params'][_0x11368b(0x21d)] + _0x11368b(0x212) + _0x2ed0e0['replace']('undefined', '') + _0x11368b(0x1fe));
            }
        });
    }
});
app[_0x20fb16(0x1f5)]('/get/:providedName', router);
app['use'](function (_0x6962e0, _0x2a6c95, _0x4e7e72) {
    const _0x431867 = _0x20fb16;
    _0x2a6c95[_0x431867(0x1fa)](0x194);
    _0x2a6c95[_0x431867(0x1f1)]('/');
});
let server = app[_0x20fb16(0x1fb)](0xbb8, function () {
    const _0x3d3615 = _0x20fb16;
    console[_0x3d3615(0x208)](_0x3d3615(0x20c));
    console[_0x3d3615(0x208)](_0x3d3615(0x1f3));
});

//Copyright 2022, Brian Walczak, All rights reserved.
