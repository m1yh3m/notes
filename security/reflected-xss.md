# Reflected XSS

A type of Cross Site Scripting.

https://owasp.org/www-community/attacks/xss/

https://security.stackexchange.com/questions/65142/what-is-reflected-xss


Content should not be appended to DOM without sanitizing.

The data when rendered with React's JSX `{}` is secure and safe from XSS attacks.

Data must be escaped before rendering to the DOM.

Data should be trusted.

Data from users should never be trusted.

Data stored in database from users should never be trusted.

Users -> Sanitize -> Store -> Read -> Escape/Sanitize -> User

Before storing to DB, take care that it doesn't contain DB exploitable data.

Before rendering to User, take care that it doesn't contain DOM, JS, CSS, HTML, or any other web exploitable data. This is very hard.

`=xss"></body><svg/onload=alert(document.domain)>`
