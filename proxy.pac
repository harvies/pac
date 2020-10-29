function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, ".google.com") 
        || dnsDomainIs(host, ".youtube.com") 
        || dnsDomainIs(host, ".wikipedia.org") 
        || dnsDomainIs(host, ".twitter.org") 
        || dnsDomainIs(host, ".githubusercontent.com") 
        || dnsDomainIs(host, "paofu.cloud") 
        || dnsDomainIs(host, ".github.com") 
        || dnsDomainIs(host, ".github.io") 
        || dnsDomainIs(host, ".v2ex.com") 
        || dnsDomainIs(host, ".evernote.com") 
       ) {
        return "SOCKS5 127.0.0.1:1080";
    }
    return "DIRECT";
}
