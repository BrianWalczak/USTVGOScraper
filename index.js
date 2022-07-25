//This code is obfuscated for protection
const _0x228093 = _0x5427;
function _0x5427(_0x5a6d8f, _0x4a8598) {
    const _0x3896ad = _0x3896();
    _0x5427 = function (_0x5427c2, _0x1ef8ea) {
        _0x5427c2 = _0x5427c2 - 0x1ca;
        let _0x4f3173 = _0x3896ad[_0x5427c2];
        return _0x4f3173;
    };
    return _0x5427(_0x5a6d8f, _0x4a8598);
}
(function (_0x1e6bde, _0x152628) {
    const _0x1daeb3 = _0x5427;
    const _0x2b28c5 = _0x1e6bde();
    while (!![]) {
        try {
            const _0x4a61b0 = -parseInt(_0x1daeb3(0x1cf)) / 0x1 + parseInt(_0x1daeb3(0x1cc)) / 0x2 * (-parseInt(_0x1daeb3(0x1ec)) / 0x3) + -parseInt(_0x1daeb3(0x1dd)) / 0x4 + -parseInt(_0x1daeb3(0x1cb)) / 0x5 * (parseInt(_0x1daeb3(0x1d5)) / 0x6) + parseInt(_0x1daeb3(0x1f1)) / 0x7 + parseInt(_0x1daeb3(0x1e9)) / 0x8 + -parseInt(_0x1daeb3(0x1ce)) / 0x9 * (-parseInt(_0x1daeb3(0x1f5)) / 0xa);
            if (_0x4a61b0 === _0x152628) {
                break;
            } else {
                _0x2b28c5['push'](_0x2b28c5['shift']());
            }
        } catch (_0x4a29c1) {
            _0x2b28c5['push'](_0x2b28c5['shift']());
        }
    }
}(_0x3896, 0xde284));
const fetch = (..._0x4017f8) => import(_0x228093(0x1f4))[_0x228093(0x1ca)](({default: _0x33ea9c}) => _0x33ea9c(..._0x4017f8));
const readline = require('readline');
const express = require(_0x228093(0x1da));
const router = express[_0x228093(0x1d2)]();
const fs = require('fs');
const app = express();
router[_0x228093(0x1df)]('/', function (_0x226ce2, _0x3e4f1e) {
    const _0x3ebaf6 = _0x228093;
    _0x3e4f1e['send'](_0x3ebaf6(0x1e6) + (_0x226ce2['protocol'] + '://' + _0x226ce2[_0x3ebaf6(0x1df)](_0x3ebaf6(0x1d1))) + _0x3ebaf6(0x1d6));
});
app[_0x228093(0x1f7)]('/', router);
router[_0x228093(0x1df)](_0x228093(0x1ee), function (_0x240387, _0x345b6c) {
    const _0x2d171b = _0x228093;
    if (_0x240387[_0x2d171b(0x1e8)][_0x2d171b(0x1e0)] != null) {
        var _0x42aa91;
        fs['readFile']('channels.txt', _0x2d171b(0x1d7), function (_0x3713e9, _0x127abe) {
            const _0x3a8465 = _0x2d171b;
            var _0x1d616c = _0x127abe[_0x3a8465(0x1de)]('\x0a');
            for (var _0x4cf4dc = 0x0; _0x4cf4dc < _0x1d616c[_0x3a8465(0x1e1)]; _0x4cf4dc++) {
                if (_0x1d616c[_0x4cf4dc][_0x3a8465(0x1de)](_0x3a8465(0x1f2))[0x1] == _0x240387[_0x3a8465(0x1e8)][_0x3a8465(0x1e0)]) {
                    _0x42aa91 = _0x1d616c[_0x4cf4dc];
                    name = _0x42aa91[_0x3a8465(0x1de)](_0x3a8465(0x1f2))[0x0];
                    code = _0x42aa91[_0x3a8465(0x1de)](_0x3a8465(0x1f2))[0x1];
                    logo = _0x42aa91['split'](_0x3a8465(0x1f2))[0x2];
                    id = _0x42aa91['split']('\x20|\x20')[0x3];
                    fetch('https://ustvgo.tv/player.php?stream=' + code, {
                        'method': _0x3a8465(0x1f3),
                        'headers': { 'Referer': _0x3a8465(0x1eb) }
                    })['then'](_0x203a8e => _0x203a8e['text']())[_0x3a8465(0x1ca)](_0x26c3cf => {
                        const _0x55f6a0 = _0x3a8465;
                        if (_0x26c3cf[_0x55f6a0(0x1f0)]('.m3u8') == !![]) {
                            link = _0x26c3cf['split']('hls_src=\x27')[0x1][_0x55f6a0(0x1de)]('\x27')[0x0];
                        } else {
                            link = _0x55f6a0(0x1f6);
                        }
                        m3uTXT = _0x55f6a0(0x1cd) + code + _0x55f6a0(0x1d3) + logo + '\x22,\x20' + name + '\x0a' + link;
                        var _0x3f973e = name[_0x55f6a0(0x1e7)]() + '.m3u';
                        fs[_0x55f6a0(0x1d9)](_0x3f973e, m3uTXT, _0x234042 => {
                            const _0x140e33 = _0x55f6a0;
                            if (_0x234042)
                                throw _0x234042;
                            _0x345b6c[_0x140e33(0x1f8)](_0x140e33(0x1db) + _0x3f973e + _0x140e33(0x1e5) + m3uTXT + '</html>');
                        });
                    });
                }
            }
            if (typeof _0x42aa91 === _0x3a8465(0x1ef)) {
                var _0x48e395;
                for (var _0x4cf4dc = 0x0; _0x4cf4dc < _0x1d616c[_0x3a8465(0x1e1)]; _0x4cf4dc++) {
                    _0x48e395 = _0x48e395 + (_0x1d616c[_0x4cf4dc][_0x3a8465(0x1de)](_0x3a8465(0x1f2))[0x1] + '\x20(' + _0x1d616c[_0x4cf4dc][_0x3a8465(0x1de)](_0x3a8465(0x1f2))[0x0] + ')') + _0x3a8465(0x1ed);
                }
                _0x345b6c['send'](_0x3a8465(0x1d8) + _0x240387[_0x3a8465(0x1e8)][_0x3a8465(0x1e0)] + ')\x20was\x20not\x20found\x20on\x20USTVGO\x27s\x20directory<br><br>Here\x20is\x20the\x20list\x20of\x20channels\x20to\x20search\x20for:<br>' + _0x48e395[_0x3a8465(0x1e4)](_0x3a8465(0x1ef), '') + '</html>');
            }
        });
    }
});
app[_0x228093(0x1f7)]('/get/:providedName', router);
app[_0x228093(0x1f7)](function (_0x4fe7c0, _0x5b1566, _0x4fd192) {
    const _0x5d5fe8 = _0x228093;
    _0x5b1566[_0x5d5fe8(0x1dc)](0x194);
    _0x5b1566[_0x5d5fe8(0x1e2)]('/');
});
let server = app[_0x228093(0x1ea)](0xbb8, function () {
    const _0x42f726 = _0x228093;
    console['log'](_0x42f726(0x1d0));
    console[_0x42f726(0x1e3)](_0x42f726(0x1d4));
});
function _0x3896() {
    const _0x549eb0 = [
        '\x22\x20group-title=\x22ustvgo\x22\x20tvg-logo=\x22',
        'Copyright\x202022,\x20Brian\x20Walczak,\x20All\x20rights\x20reserved.',
        '560286kNoWry',
        '/get/FoodNetwork<br><br><small>Copyright\x202022,\x20Brian\x20Walczak,\x20All\x20rights\x20reserved.</small></center></html>',
        'utf8',
        '<html\x20style=\x27font-family:system-ui\x27>The\x20channel\x20that\x20you\x20searched\x20for\x20(',
        'writeFile',
        'express',
        '<html\x20style=\x27font-family:system-ui\x27>File\x20was\x20saved\x20as\x20',
        'status',
        '6818048URNIpA',
        'split',
        'get',
        'providedName',
        'length',
        'redirect',
        'log',
        'replace',
        '<br><br><br>File\x20Contents:<br>',
        '<html\x20style=\x27font-family:system-ui\x27><center>To\x20generate\x20an\x20M3U\x20from\x20USTVGO.TV,\x20search\x20for\x20the\x20channel\x20by\x20visiting\x20/get/\x20(It\x20must\x20be\x20the\x20channels\x20code)<br><br>Example:\x20',
        'trim',
        'params',
        '5700792tEExEL',
        'listen',
        'https://ustvgo.tv/',
        '6NKOvrX',
        '<br>',
        '/get/:providedName',
        'undefined',
        'includes',
        '2896824Exvrks',
        '\x20|\x20',
        'GET',
        'node-fetch',
        '210srAghI',
        'https://raw.githubusercontent.com/benmoose39/YouTube_to_m3u/main/assets/moose_na.m3u',
        'use',
        'send',
        'then',
        '65PpEsSO',
        '876594VkbZtZ',
        '#EXTINF:-1\x20tvg-id=\x22',
        '2235033lnKsxL',
        '1636493yWCVeY',
        'USTVGO\x20Scraper\x20is\x20at\x20localhost:3000\x20(port\x203000)',
        'host',
        'Router'
    ];
    _0x3896 = function () {
        return _0x549eb0;
    };
    return _0x3896();
}

//Copyright 2022, Brian Walczak, All rights reserved.
