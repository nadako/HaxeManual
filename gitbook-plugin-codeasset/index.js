var fs = require('fs');
var path = require('path');
module.exports = {
    blocks: {
        codeasset: function(block) {
            var filename = block.body;
            var lang = block.args[0];
            if (lang == null) {
                var ext = path.extname(filename);
                if (ext.charAt(0) == '.')
                    ext = ext.substr(1);
                lang = ext;
            }
            var content = fs.readFileSync(filename, 'utf-8');
            var md = '```' + lang + '\n' + content + '\n```';
            return this.book.formatString('markdown', md);
        }
    }
};
