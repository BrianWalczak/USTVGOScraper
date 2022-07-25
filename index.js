//This code is obfuscated for protection
const _0x53985b = _0x20cb;
(function (_0x4bc55d, _0x146a0c) {
    const _0x2b02ac = _0x20cb;
    const _0x496aae = _0x4bc55d();
    while (!![]) {
        try {
            const _0x57a308 = -parseInt(_0x2b02ac(0x137)) / 0x1 * (parseInt(_0x2b02ac(0x140)) / 0x2) + -parseInt(_0x2b02ac(0x153)) / 0x3 * (-parseInt(_0x2b02ac(0x14a)) / 0x4) + parseInt(_0x2b02ac(0x141)) / 0x5 + parseInt(_0x2b02ac(0x144)) / 0x6 * (-parseInt(_0x2b02ac(0x147)) / 0x7) + parseInt(_0x2b02ac(0x14d)) / 0x8 + -parseInt(_0x2b02ac(0x152)) / 0x9 + parseInt(_0x2b02ac(0x146)) / 0xa * (-parseInt(_0x2b02ac(0x154)) / 0xb);
            if (_0x57a308 === _0x146a0c) {
                break;
            } else {
                _0x496aae['push'](_0x496aae['shift']());
            }
        } catch (_0x129fe4) {
            _0x496aae['push'](_0x496aae['shift']());
        }
    }
}(_0x2b4d, 0xc44d6));
const fetch = (..._0x255a85) => import('node-fetch')['then'](({default: _0x3d9c19}) => _0x3d9c19(..._0x255a85));
const readline = require('readline');
const express = require('express');
const router = express[_0x53985b(0x145)]();
const fs = require('fs');
const app = express();
router[_0x53985b(0x138)]('/', function (_0x4d1246, _0x147921) {
    const _0x44194a = _0x53985b;
    _0x147921[_0x44194a(0x13e)](_0x44194a(0x15a) + (_0x4d1246[_0x44194a(0x13c)] + _0x44194a(0x159) + _0x4d1246['get'](_0x44194a(0x155))) + _0x44194a(0x163));
});
app['use']('/', router);
router[_0x53985b(0x138)](_0x53985b(0x162), function (_0x5a8b67, _0x5ddb8b) {
    const _0x4d0123 = _0x53985b;
    if (_0x5a8b67[_0x4d0123(0x15f)][_0x4d0123(0x14c)] != null) {
        var _0x39fbe5;
        fs[_0x4d0123(0x142)](_0x4d0123(0x161), _0x4d0123(0x156), function (_0x3badca, _0x18094d) {
            const _0x3f33ce = _0x4d0123;
            var _0x145af0 = _0x18094d['split']('\x0a');
            for (var _0x38c706 = 0x0; _0x38c706 < _0x145af0['length']; _0x38c706++) {
                if (_0x145af0[_0x38c706][_0x3f33ce(0x14b)](_0x3f33ce(0x158))[0x1] == _0x5a8b67[_0x3f33ce(0x15f)][_0x3f33ce(0x14c)]) {
                    _0x39fbe5 = _0x145af0[_0x38c706];
                    name = _0x39fbe5[_0x3f33ce(0x14b)](_0x3f33ce(0x158))[0x0];
                    code = _0x39fbe5[_0x3f33ce(0x14b)](_0x3f33ce(0x158))[0x1];
                    logo = _0x39fbe5[_0x3f33ce(0x14b)](_0x3f33ce(0x158))[0x2];
                    id = _0x39fbe5['split']('\x20|\x20')[0x3];
                    fetch('https://ustvgo.tv/player.php?stream=' + code, {
                        'method': _0x3f33ce(0x14f),
                        'headers': { 'Referer': _0x3f33ce(0x139) }
                    })[_0x3f33ce(0x157)](_0x17977b => _0x17977b['text']())['then'](_0x458937 => {
                        const _0x33c481 = _0x3f33ce;
                        if (_0x458937['includes'](_0x33c481(0x15e)) == !![]) {
                            link = _0x458937[_0x33c481(0x14b)]('hls_src=\x27')[0x1][_0x33c481(0x14b)]('\x27')[0x0];
                        } else {
                            link = 'https://raw.githubusercontent.com/benmoose39/YouTube_to_m3u/main/assets/moose_na.m3u';
                        }
                        m3uTXT = _0x33c481(0x136) + code + '\x22\x20group-title=\x22ustvgo\x22\x20tvg-logo=\x22' + logo + '\x22,\x20' + name + '\x0a' + link;
                        var _0x1bdee9 = name[_0x33c481(0x151)]() + '.m3u';
                        fs[_0x33c481(0x15c)](_0x1bdee9, m3uTXT, _0x1754b2 => {
                            const _0x58c892 = _0x33c481;
                            if (_0x1754b2)
                                throw _0x1754b2;
                            _0x5ddb8b[_0x58c892(0x13e)](_0x58c892(0x13d) + (_0x5a8b67[_0x58c892(0x13c)] + _0x58c892(0x159) + _0x5a8b67['get'](_0x58c892(0x155))) + '/' + _0x1bdee9 + '<br><br><br>File\x20Contents:<br>' + m3uTXT + _0x58c892(0x15b));
                        });
                    });
                }
            }
            if (typeof _0x39fbe5 === _0x3f33ce(0x150)) {
                var _0x3e01e2;
                for (var _0x38c706 = 0x0; _0x38c706 < _0x145af0[_0x3f33ce(0x15d)]; _0x38c706++) {
                    _0x3e01e2 = _0x3e01e2 + (_0x145af0[_0x38c706][_0x3f33ce(0x14b)](_0x3f33ce(0x158))[0x1] + '\x20(' + _0x145af0[_0x38c706][_0x3f33ce(0x14b)](_0x3f33ce(0x158))[0x0] + ')') + _0x3f33ce(0x148);
                }
                _0x5ddb8b[_0x3f33ce(0x13e)](_0x3f33ce(0x13b) + _0x5a8b67['params']['providedName'] + _0x3f33ce(0x143) + _0x3e01e2['replace'](_0x3f33ce(0x150), '') + '</html>');
            }
        });
    }
});
app[_0x53985b(0x14e)](_0x53985b(0x162), router);
function _0x2b4d() {
    const _0xbcb521 = [
        '8jqcObk',
        'split',
        'providedName',
        '12331624fXHflg',
        'use',
        'GET',
        'undefined',
        'trim',
        '6837354lWgToB',
        '953283uyIoQl',
        '12870385UTadJb',
        'host',
        'utf8',
        'then',
        '\x20|\x20',
        '://',
        '<html\x20style=\x27font-family:system-ui\x27><center>To\x20generate\x20an\x20M3U\x20from\x20USTVGO.TV,\x20search\x20for\x20the\x20channel\x20by\x20visiting\x20/get/\x20(It\x20must\x20be\x20the\x20channels\x20code)<br><br>Example:\x20',
        '</html>',
        'writeFile',
        'length',
        '.m3u8',
        'params',
        'log',
        'channels.txt',
        '/get/:providedName',
        '/get/FoodNetwork<br><br><small>Copyright\x202022,\x20Brian\x20Walczak,\x20All\x20rights\x20reserved.</small></center></html>',
        '#EXTINF:-1\x20tvg-id=\x22',
        '1QqnOhP',
        'get',
        'https://ustvgo.tv/',
        'Copyright\x202022,\x20Brian\x20Walczak,\x20All\x20rights\x20reserved.',
        '<html\x20style=\x27font-family:system-ui\x27>The\x20channel\x20that\x20you\x20searched\x20for\x20(',
        'protocol',
        '<html\x20style=\x27font-family:system-ui\x27>File\x20was\x20saved\x20as\x20',
        'send',
        'redirect',
        '353382WrisnI',
        '5063195QmDMJh',
        'readFile',
        ')\x20was\x20not\x20found\x20on\x20USTVGO\x27s\x20directory<br><br>Here\x20is\x20the\x20list\x20of\x20channels\x20to\x20search\x20for:<br>',
        '18204RgPXnL',
        'Router',
        '10PIESKG',
        '644lGxLLR',
        '<br>',
        'USTVGO\x20Scraper\x20is\x20at\x20localhost:3000\x20(port\x203000)'
    ];
    _0x2b4d = function () {
        return _0xbcb521;
    };
    return _0x2b4d();
}
function _0x20cb(_0x2cf285, _0x3f4e02) {
    const _0x2b4dbd = _0x2b4d();
    _0x20cb = function (_0x20cb54, _0x2bd413) {
        _0x20cb54 = _0x20cb54 - 0x136;
        let _0x4d5aad = _0x2b4dbd[_0x20cb54];
        return _0x4d5aad;
    };
    return _0x20cb(_0x2cf285, _0x3f4e02);
}
app[_0x53985b(0x14e)](function (_0x29daff, _0x158376, _0x3ad175) {
    const _0x2e4b38 = _0x53985b;
    _0x158376['status'](0x194);
    _0x158376[_0x2e4b38(0x13f)]('/');
});
let server = app['listen'](0xbb8, function () {
    const _0x461603 = _0x53985b;
    console[_0x461603(0x160)](_0x461603(0x149));
    console['log'](_0x461603(0x13a));
});

//Copyright 2022, Brian Walczak, All rights reserved.
