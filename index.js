//This code is obfuscated for protection
const _0x431a2c = _0x15e0;
(function (_0x44c6e0, _0x29813a) {
    const _0x461fd8 = _0x15e0;
    const _0x1bf64e = _0x44c6e0();
    while (!![]) {
        try {
            const _0x2557d2 = parseInt(_0x461fd8(0x1c4)) / 0x1 * (parseInt(_0x461fd8(0x199)) / 0x2) + parseInt(_0x461fd8(0x1ad)) / 0x3 + -parseInt(_0x461fd8(0x1bf)) / 0x4 * (parseInt(_0x461fd8(0x1c9)) / 0x5) + parseInt(_0x461fd8(0x1a9)) / 0x6 * (-parseInt(_0x461fd8(0x1b6)) / 0x7) + -parseInt(_0x461fd8(0x19f)) / 0x8 + parseInt(_0x461fd8(0x1ae)) / 0x9 + -parseInt(_0x461fd8(0x1ca)) / 0xa * (-parseInt(_0x461fd8(0x1be)) / 0xb);
            if (_0x2557d2 === _0x29813a) {
                break;
            } else {
                _0x1bf64e['push'](_0x1bf64e['shift']());
            }
        } catch (_0x3bc145) {
            _0x1bf64e['push'](_0x1bf64e['shift']());
        }
    }
}(_0x3879, 0x7fcdc));
const fetch = (..._0x5eb7b9) => import(_0x431a2c(0x1af))[_0x431a2c(0x1b1)](({default: _0x512a13}) => _0x512a13(..._0x5eb7b9));
const readline = require(_0x431a2c(0x1a1));
const express = require(_0x431a2c(0x1b4));
const router = express[_0x431a2c(0x1a0)]();
function _0x3879() {
    const _0x40ccbb = [
        'use',
        '#EXTINF:-1\x20tvg-id=\x22',
        'trim',
        '1180239ztVFUT',
        '3944781jzHtaO',
        'node-fetch',
        '.m3u',
        'then',
        '\x20|\x20',
        'params',
        'express',
        'https://ustvgo.tv/',
        '7mWMptf',
        '/get/:providedName',
        'listen',
        '<html\x20style=\x27font-family:system-ui\x27>File\x20was\x20saved\x20as\x20',
        'get',
        'GET',
        'https://raw.githubusercontent.com/benmoose39/YouTube_to_m3u/main/assets/moose_na.m3u',
        '\x22\x20group-title=\x22ustvgo\x22\x20tvg-logo=\x22',
        '3515985JlnaeN',
        '13772QoBQai',
        'protocol',
        'Copyright\x202022,\x20Brian\x20Walczak,\x20All\x20rights\x20reserved.',
        'providedName',
        'channels.txt',
        '42HVgovE',
        '<br>',
        'redirect',
        '<html\x20style=\x27font-family:system-ui\x27><center>To\x20generate\x20an\x20M3U\x20from\x20USTVGO.TV,\x20search\x20for\x20the\x20channel\x20by\x20visiting\x20/get/\x20(It\x20must\x20be\x20the\x20channels\x20code)<br><br>Example:\x20',
        '</html>',
        '230XHTEWw',
        '10TkiSCh',
        '15048pXrRyX',
        'hls_src=\x27',
        '/get/FoodNetwork<br><br><small>Copyright\x202022,\x20Brian\x20Walczak,\x20All\x20rights\x20reserved.</small></center></html>',
        '.m3u8',
        'split',
        '<br><br><br>File\x20Contents:<br>',
        '5205120rQIsse',
        'Router',
        'readline',
        'send',
        'includes',
        'undefined',
        'https://ustvgo.tv/player.php?stream=',
        'readFile',
        'status',
        '://',
        '809178APqbfu'
    ];
    _0x3879 = function () {
        return _0x40ccbb;
    };
    return _0x3879();
}
const fs = require('fs');
const app = express();
router[_0x431a2c(0x1ba)]('/', function (_0x4959b0, _0x45a9d1) {
    const _0x386377 = _0x431a2c;
    _0x45a9d1[_0x386377(0x1a2)](_0x386377(0x1c7) + (_0x4959b0[_0x386377(0x1c0)] + _0x386377(0x1a8) + _0x4959b0[_0x386377(0x1ba)]('host')) + _0x386377(0x19b));
});
function _0x15e0(_0x5d5b4a, _0x4f032d) {
    const _0x387968 = _0x3879();
    _0x15e0 = function (_0x15e055, _0x82d058) {
        _0x15e055 = _0x15e055 - 0x199;
        let _0x5a5ef6 = _0x387968[_0x15e055];
        return _0x5a5ef6;
    };
    return _0x15e0(_0x5d5b4a, _0x4f032d);
}
app[_0x431a2c(0x1aa)]('/', router);
router['get'](_0x431a2c(0x1b7), function (_0x533b59, _0x343ae6) {
    const _0x31e2fb = _0x431a2c;
    if (_0x533b59[_0x31e2fb(0x1b3)]['providedName'] != null) {
        var _0x49e3cd;
        fs[_0x31e2fb(0x1a6)](_0x31e2fb(0x1c3), 'utf8', function (_0x1c788e, _0x9ab7ef) {
            const _0x8f4ab8 = _0x31e2fb;
            var _0x5d8b2f = _0x9ab7ef['split']('\x0a');
            for (var _0x55839b = 0x0; _0x55839b < _0x5d8b2f['length']; _0x55839b++) {
                if (_0x5d8b2f[_0x55839b][_0x8f4ab8(0x19d)](_0x8f4ab8(0x1b2))[0x1] == _0x533b59['params'][_0x8f4ab8(0x1c2)]) {
                    _0x49e3cd = _0x5d8b2f[_0x55839b];
                    name = _0x49e3cd[_0x8f4ab8(0x19d)](_0x8f4ab8(0x1b2))[0x0];
                    code = _0x49e3cd[_0x8f4ab8(0x19d)](_0x8f4ab8(0x1b2))[0x1];
                    logo = _0x49e3cd[_0x8f4ab8(0x19d)]('\x20|\x20')[0x2];
                    id = _0x49e3cd[_0x8f4ab8(0x19d)](_0x8f4ab8(0x1b2))[0x3];
                    fetch(_0x8f4ab8(0x1a5) + code, {
                        'method': _0x8f4ab8(0x1bb),
                        'headers': { 'Referer': _0x8f4ab8(0x1b5) }
                    })['then'](_0x316a62 => _0x316a62['text']())[_0x8f4ab8(0x1b1)](_0x101ac7 => {
                        const _0x3b7e2c = _0x8f4ab8;
                        if (_0x101ac7[_0x3b7e2c(0x1a3)](_0x3b7e2c(0x19c)) == !![]) {
                            link = _0x101ac7[_0x3b7e2c(0x19d)](_0x3b7e2c(0x19a))[0x1]['split']('\x27')[0x0];
                        } else {
                            link = _0x3b7e2c(0x1bc);
                        }
                        m3uTXT = _0x3b7e2c(0x1ab) + code + _0x3b7e2c(0x1bd) + logo + '\x22,\x20' + name + '\x0a' + link;
                        var _0x576f8b = name[_0x3b7e2c(0x1ac)]() + _0x3b7e2c(0x1b0);
                        fs['writeFile'](_0x576f8b, m3uTXT, _0x2dd32d => {
                            const _0x1985a7 = _0x3b7e2c;
                            if (_0x2dd32d)
                                throw _0x2dd32d;
                            _0x343ae6[_0x1985a7(0x1a2)](_0x1985a7(0x1b9) + (__dirname + _0x576f8b) + _0x1985a7(0x19e) + m3uTXT + _0x1985a7(0x1c8));
                        });
                    });
                }
            }
            if (typeof _0x49e3cd === _0x8f4ab8(0x1a4)) {
                var _0x32ffcf;
                for (var _0x55839b = 0x0; _0x55839b < _0x5d8b2f['length']; _0x55839b++) {
                    _0x32ffcf = _0x32ffcf + (_0x5d8b2f[_0x55839b][_0x8f4ab8(0x19d)]('\x20|\x20')[0x1] + '\x20(' + _0x5d8b2f[_0x55839b][_0x8f4ab8(0x19d)](_0x8f4ab8(0x1b2))[0x0] + ')') + _0x8f4ab8(0x1c5);
                }
                _0x343ae6[_0x8f4ab8(0x1a2)]('<html\x20style=\x27font-family:system-ui\x27>The\x20channel\x20that\x20you\x20searched\x20for\x20(' + _0x533b59[_0x8f4ab8(0x1b3)]['providedName'] + ')\x20was\x20not\x20found\x20on\x20USTVGO\x27s\x20directory<br><br>Here\x20is\x20the\x20list\x20of\x20channels\x20to\x20search\x20for:<br>' + _0x32ffcf['replace']('undefined', '') + _0x8f4ab8(0x1c8));
            }
        });
    }
});
app['use'](_0x431a2c(0x1b7), router);
app[_0x431a2c(0x1aa)](function (_0x7796c0, _0x1c1352, _0x17f14a) {
    const _0xc8c330 = _0x431a2c;
    _0x1c1352[_0xc8c330(0x1a7)](0x194);
    _0x1c1352[_0xc8c330(0x1c6)]('/');
});
let server = app[_0x431a2c(0x1b8)](0xbb8, function () {
    const _0x12aaa7 = _0x431a2c;
    console['log']('USTVGO\x20Scraper\x20is\x20at\x20localhost:3000\x20(port\x203000)');
    console['log'](_0x12aaa7(0x1c1));
});

//Copyright 2022, Brian Walczak, All rights reserved.
