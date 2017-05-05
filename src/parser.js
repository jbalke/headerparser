/*{
  "ipaddress": "IP address wil go here",
  "language": "Language will go here",
  "software": "Client OS will go here"
}
*/

function Parser() {

}

Parser.parseRequest = function(req) {
    console.log(req.headers);

    return { 
        ipaddress: Parser.getIP(req.connection.remoteAddress),
        language: Parser.getLanguage(req.headers["accept-language"]),
        software: Parser.getOS(req.headers["user-agent"])
    }
}

Parser.getIP = function(remoteAddress) {
    /*if (~remoteAddress.indexOf(':')) {
        return remoteAddress.split(':').reverse()[0];
    }

    return remoteAddress;*/

    //console.log(remoteAddress);

    let IPv6 = ~remoteAddress.indexOf(':');

    return IPv6 ? remoteAddress.split(':').reverse()[0] : remoteAddress;

}

Parser.getLanguage = function(language) {
    return language.split(',')[0].trim();
}

Parser.getOS = function(useragent) {
    let sysInfo = useragent.split(/[\(\)]/)[1];

    return sysInfo.trim();
}

module.exports = Parser;