# prf-assignment

Assignment for Programrendszerek fejlesztése @ SZTE TTIK (2019-20/2) by Rabi Róbert

The README will be in Hungarian from this so if you would like to see an English version of it, check out README.EN.MD (TODO).

## Setup

### MongoDB

MongoDB indítása Dockerrel:

```shell
docker run --name mongo -v $PWD/mongo:/etc/mongo -p 27017:27017 -d mongo
```

Vagy későbbi indítás során elég:

```shell
docker start mongo
```

Megjegyzés: Linux esetén szükséges volt a

```shell
sudo
```

a parancsok elé.

### Node.js

Szerver dependenciák telepítése (első futtatáskor):

```shell
npm install
```

Szerver indítása fejlesztői módban:

```shell
npm run watch
```

Szerver indítása (production környezetben):

```shell
npm start
```

### Angular

Az Angular alkalmazás a ./prf-frontend könyvtárban található, ezért hogy azon tudjunk dolgozni, előbb át kell navigálni oda a következő paranccsal:

```shell
cd prf-frontend
```

Majd itt is telepítsük a dependenciákat:

```shell
npm install
```

Ez után pedig a frontend indítható (fejlesztői módban):

```shell
npm start
```
