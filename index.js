//This code is obfuscated for protection
const _0x5af67c = _0x13e7;
(function (_0x485ba1, _0xff9fc8) {
    const _0x146f48 = _0x13e7;
    const _0x561459 = _0x485ba1();
    while (!![]) {
        try {
            const _0x494cbe = -parseInt(_0x146f48(0x167)) / 0x1 + -parseInt(_0x146f48(0x16d)) / 0x2 * (-parseInt(_0x146f48(0x18d)) / 0x3) + parseInt(_0x146f48(0x18b)) / 0x4 + parseInt(_0x146f48(0x193)) / 0x5 + -parseInt(_0x146f48(0x164)) / 0x6 * (-parseInt(_0x146f48(0x178)) / 0x7) + -parseInt(_0x146f48(0x188)) / 0x8 * (-parseInt(_0x146f48(0x165)) / 0x9) + -parseInt(_0x146f48(0x187)) / 0xa;
            if (_0x494cbe === _0xff9fc8) {
                break;
            } else {
                _0x561459['push'](_0x561459['shift']());
            }
        } catch (_0x1a88fc) {
            _0x561459['push'](_0x561459['shift']());
        }
    }
}(_0x3a5c, 0xa787c));
const fetch = (..._0x99259c) => import('node-fetch')['then'](({default: _0x35cbf9}) => _0x35cbf9(..._0x99259c));
const readline = require(_0x5af67c(0x175));
const express = require(_0x5af67c(0x17c));
const router = express[_0x5af67c(0x183)]();
const fs = require('fs');
const app = express();
function _0x3a5c() {
    const _0x157b2e = [
        'use',
        '</html>',
        '52714IGDJdT',
        'protocol',
        'send',
        '<html\x20style=\x27font-family:system-ui\x27>The\x20channel\x20that\x20you\x20searched\x20for\x20(',
        'https://ustvgo.tv/',
        'https://raw.githubusercontent.com/benmoose39/YouTube_to_m3u/main/assets/moose_na.m3u',
        'PORT',
        'utf8',
        'readline',
        'then',
        '\x22\x20group-title=\x22ustvgo\x22\x20tvg-logo=\x22',
        '11746AXwkmM',
        '<br><br><br>File\x20Contents:<br>',
        'redirect',
        'hls_src=\x27',
        'express',
        'USTVGO\x20Scraper\x20is\x20at\x20localhost:',
        '://',
        '\x20(port\x20',
        '#EXTINF:-1\x20tvg-id=\x22',
        'replace',
        'length',
        'Router',
        '/get/:providedName',
        'params',
        '\x20|\x20',
        '4146730TzttuM',
        '968hdhpIX',
        '.m3u',
        '<br>',
        '3500528VzDKTp',
        '\x22,\x20',
        '93ZaOzxK',
        'includes',
        'undefined',
        'Copyright\x202022,\x20Brian\x20Walczak,\x20All\x20rights\x20reserved.',
        'https://ustvgo.tv/player.php?stream=',
        'log',
        '2180450iTTsjz',
        ')\x20was\x20not\x20found\x20on\x20USTVGO\x27s\x20directory<br><br>Here\x20is\x20the\x20list\x20of\x20channels\x20to\x20search\x20for:<br>',
        'GET',
        '.m3u8',
        'env',
        '480kHLvAd',
        '7083bsnsqs',
        'providedName',
        '1256879iMjMHH',
        'host',
        'get',
        'split'
    ];
    _0x3a5c = function () {
        return _0x157b2e;
    };
    return _0x3a5c();
}
router['get']('/', function (_0x61356d, _0xb4aad2) {
    const _0x48c24c = _0x5af67c;
    _0xb4aad2[_0x48c24c(0x16f)]('<html\x20style=\x27font-family:system-ui\x27><center>To\x20generate\x20an\x20M3U\x20from\x20USTVGO.TV,\x20search\x20for\x20the\x20channel\x20by\x20visiting\x20/get/\x20(It\x20must\x20be\x20the\x20channels\x20code)<br><br>Example:\x20' + (_0x61356d[_0x48c24c(0x16e)] + _0x48c24c(0x17e) + _0x61356d[_0x48c24c(0x169)](_0x48c24c(0x168))) + '/get/FoodNetwork<br><br><small>Copyright\x202022,\x20Brian\x20Walczak,\x20All\x20rights\x20reserved.</small></center></html>');
});
function _0x13e7(_0x57a44b, _0x49979d) {
    const _0x3a5c79 = _0x3a5c();
    _0x13e7 = function (_0x13e7f8, _0x4191d2) {
        _0x13e7f8 = _0x13e7f8 - 0x163;
        let _0x5eda1f = _0x3a5c79[_0x13e7f8];
        return _0x5eda1f;
    };
    return _0x13e7(_0x57a44b, _0x49979d);
}
app[_0x5af67c(0x16b)]('/', router);
router[_0x5af67c(0x169)](_0x5af67c(0x184), function (_0x2903c4, _0x558055) {
    const _0x36f2e4 = _0x5af67c;
    if (_0x2903c4[_0x36f2e4(0x185)][_0x36f2e4(0x166)] != null) {
        var _0x271336;
        fs['readFile']('channels.txt', _0x36f2e4(0x174), function (_0x2f19ef, _0x5d81ad) {
            const _0x1a27b8 = _0x36f2e4;
            var _0x360da1 = _0x5d81ad[_0x1a27b8(0x16a)]('\x0a');
            for (var _0x395258 = 0x0; _0x395258 < _0x360da1[_0x1a27b8(0x182)]; _0x395258++) {
                if (_0x360da1[_0x395258][_0x1a27b8(0x16a)](_0x1a27b8(0x186))[0x1] == _0x2903c4[_0x1a27b8(0x185)][_0x1a27b8(0x166)]) {
                    _0x271336 = _0x360da1[_0x395258];
                    name = _0x271336[_0x1a27b8(0x16a)]('\x20|\x20')[0x0];
                    code = _0x271336['split'](_0x1a27b8(0x186))[0x1];
                    logo = _0x271336['split']('\x20|\x20')[0x2];
                    id = _0x271336[_0x1a27b8(0x16a)](_0x1a27b8(0x186))[0x3];
                    fetch(_0x1a27b8(0x191) + code, {
                        'method': _0x1a27b8(0x195),
                        'headers': { 'Referer': _0x1a27b8(0x171) }
                    })[_0x1a27b8(0x176)](_0x38ab31 => _0x38ab31['text']())[_0x1a27b8(0x176)](_0x3b0d01 => {
                        const _0x4ab2cc = _0x1a27b8;
                        if (_0x3b0d01[_0x4ab2cc(0x18e)](_0x4ab2cc(0x196)) == !![]) {
                            link = _0x3b0d01[_0x4ab2cc(0x16a)](_0x4ab2cc(0x17b))[0x1][_0x4ab2cc(0x16a)]('\x27')[0x0];
                        } else {
                            link = _0x4ab2cc(0x172);
                        }
                        m3uTXT = _0x4ab2cc(0x180) + code + _0x4ab2cc(0x177) + logo + _0x4ab2cc(0x18c) + name + '\x0a' + link;
                        var _0x4c2f8a = name['trim']() + _0x4ab2cc(0x189);
                        fs['writeFile'](_0x4c2f8a, m3uTXT, _0x189027 => {
                            const _0x2e679f = _0x4ab2cc;
                            if (_0x189027)
                                throw _0x189027;
                            _0x558055['send']('<html\x20style=\x27font-family:system-ui\x27>File\x20was\x20saved\x20as\x20' + (__dirname + '/' + _0x4c2f8a) + _0x2e679f(0x179) + m3uTXT + _0x2e679f(0x16c));
                        });
                    });
                }
            }
            if (typeof _0x271336 === _0x1a27b8(0x18f)) {
                var _0x519041;
                for (var _0x395258 = 0x0; _0x395258 < _0x360da1[_0x1a27b8(0x182)]; _0x395258++) {
                    _0x519041 = _0x519041 + (_0x360da1[_0x395258][_0x1a27b8(0x16a)](_0x1a27b8(0x186))[0x1] + '\x20(' + _0x360da1[_0x395258]['split']('\x20|\x20')[0x0] + ')') + _0x1a27b8(0x18a);
                }
                _0x558055[_0x1a27b8(0x16f)](_0x1a27b8(0x170) + _0x2903c4[_0x1a27b8(0x185)][_0x1a27b8(0x166)] + _0x1a27b8(0x194) + _0x519041[_0x1a27b8(0x181)](_0x1a27b8(0x18f), '') + _0x1a27b8(0x16c));
            }
        });
    }
});
app[_0x5af67c(0x16b)](_0x5af67c(0x184), router);
app['use'](function (_0x27d877, _0x20f012, _0x4c7e6f) {
    const _0x51c481 = _0x5af67c;
    _0x20f012['status'](0x194);
    _0x20f012[_0x51c481(0x17a)]('/');
});
let server = app['listen'](process[_0x5af67c(0x163)][_0x5af67c(0x173)], function () {
    const _0x14a127 = _0x5af67c;
    console[_0x14a127(0x192)](_0x14a127(0x17d) + process[_0x14a127(0x163)][_0x14a127(0x173)] + _0x14a127(0x17f) + process[_0x14a127(0x163)][_0x14a127(0x173)] + ')');
    console['log'](_0x14a127(0x190));
});

//Copyright 2022, Brian Walczak, All rights reserved.
