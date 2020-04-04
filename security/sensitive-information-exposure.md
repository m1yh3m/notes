# Sensitive Information Exposure

- Insufficient Transport Layer Protection
- Unsupported Transport of Credentials
- Plaintext Storage

## Links

## Unsupported Transport of Credentials

- Don't send username/password over http.
- Don't send secrets via GET and/or over HTTP.

## Plaintext Storage

No to all these

- Passwords
- Pins
- Secrets
    - Secret questions
    - Secret answers

## Prevention

- Use SALTs to hash secret information
- Use stronger hashing algorithms
    - Don't write one yourself
    - Use the peer reveied one.
    - Use that is resistant to brute force
    - bcrypt is a good example.
