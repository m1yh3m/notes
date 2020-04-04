# Stored XSS

aka Type 1 XSS

## Links

- https://portswigger.net/web-security/cross-site-scripting/stored
- https://en.wikipedia.org/wiki/Cross-site_scripting
- https://wiki.owasp.org/index.php/Testing_for_Stored_Cross_site_scripting_(OTG-INPVAL-002)
- https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html

## Look for

- React has createElement, that can be abused.
- Data that is coming from user. Always sanitize.
- See if your app can store javascript:bad script here; that's a vulnerability.
- In React, use react-router-dom's Link instead of HTML's anchor 
- Redirect to error/home page if you find `javascript:` in code.

