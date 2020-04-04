# File related vulnerabilities

## Unrestricted File Upload

### Prevention

- Restrict the file type
  - Don't just read the magic numbers; use libraries that look into the files.
- Use anti-malware|virus to scan the file before saving it in the right place. Temp save to a stage area.
- Restrict the MIME types
- Restrict the size of the file that can be uploaded.
- Restrict the size of the file that can be downloaded.
- Never do a sync file save to server from client.
  - That's just DOS.
- Restrict the privileges on a file.
  - Try to have files readable for users.
  - There's almost no need to have executable files on your server from users.
