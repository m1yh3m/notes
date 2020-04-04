# NoSQL databases

## NoSQL

NoSQL stands for Non Relational.

It can be expanded as NonSQL or NotOnlySQL. 

Basically the data format is different than the relational table like structure. That's NoSQL.

These dbs can store the relational data too. It's just stored differently.

It's a trade-off.

## OOF
Here's my gripe with it. You can store non-relational-relational (yeah) data in a relational database. Create a column which can store blob of text, and you have it. 

No real need to use a NoSQL db.

## Types

- Document DB
- Key-value store
- Wide-column store
- Graph DB

### Document DB

- BSON, JSON etc. storage.
- MongoDB

### Key-value store

- Think JS object but stored.
- Redis, DynamoDB

### Wide-column store

- Think XML in document/table form. #facepalm
- Cassandra, HBase

### Graph DB

- Nodes(values) and Edges(relationships)
- Neo4j, JanusGraph
