## mysql-multiple-dumper

This module is getting sql back-up files from MySQL databases more than one.

### Installation

`npm i mysql-multiple-dumper`

### Usage

The file [DBcredentials.json](./DBcredentials.json) includes one `<Array>` object inside of it. Each of items has MySQL credentials object like:

```Javascript
{
    "host" : "127.0.0.1",
    "user" : "user_fordb",
    "database" : "database_name",
    "password": "passwd"
}
```

If it need to be got database back-ups from more than one database like two, [DBcredentials.json](./DBcredentials.json) should have an array has two item that is a MySQL credential object. The `json` file looks like:

```Javascript
[
    {
    "host" : "127.0.0.1",
    "user" : "user_fordb",
    "database" : "database_name",
    "password": "passwd"
    },
    {
    "host" : "10.0.0.1",
    "user" : "db_user",
    "database" : "db_client",
    "password": "passwd123"
    }
]    
```

After then the [DBcredentials.json](./DBcredentials.json) file has an array should be run with this line:

`node index.js`

sql files should be in the [back-ups/](./back-ups) folder with the names like:

`database_name-20-09-19-17-38.sql`

`db_client-20-09-19-17-38.sql`

