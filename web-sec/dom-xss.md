# DOM XSS

XSS can be achieved via DOM. This is also knonwn as DOM based XSS.

aka type-0 XSS



## Links

- https://owasp.org/www-community/Types_of_Cross-Site_Scripting
- https://owasp.org/www-community/attacks/DOM_Based_XSS
- https://nvd.nist.gov/vuln/detail/CVE-2018-0390
- https://portswigger.net/web-security/cross-site-scripting/dom-based
- https://www.archive.ece.cmu.edu/~lbauer/papers/2018/ndss2018-taint-tracking.pdf

## Look for

- dangerouslySetInnerHTML
- React apps not using `{}` properly.
- URL query params not being sanitized.
- Anything being set up in react via ref..innerHTML
- 
