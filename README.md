# resolume-arena-pc-control

Сервер GET запросов для Resolume Arena по сети

## Установка зависимостей

Зависимости:
node.js, git, node-windows

Скачать [node.js для Windows 64-bit](https://nodejs.org/dist/v16.15.0/node-v16.15.0-x64.msi "Скачать node.js v16.15.0 для Windows 64-bit")

Скачать [Git для Windows 64-bit](https://github.com/git-for-windows/git/releases/download/v2.36.0.windows.1/Git-2.36.0-64-bit.exe "Скачать Git v2.36.0 для Windows 64-bit")

Установить node-windows

```npm install -g node-windows@0.1.14```

## Установка в качестве службы Windows

Скачать проект

```git clone https://github.com/Rekss13/resolume-arena-pc-control.git```

Перейти в папку с проектом

```cd resolume-arena-pc-control```

Установить необходиммые модули nodejs

```npm install```

Создать ссылку на node-windows

```npm link node-windows```

Отредактировать пути в файле startService.js

Добавить службу для отключения виндовс

```node startService.js```

## Отключение службы

Перейти в папку проекта

Отключить службу

```node deleteSevice.js```

## Управление ПК и программой Resolume Arena

Для отключения ПК отправить GET запрос

```ip-address-PC:8033/shutdown```

Для перезагрузки ПК отправить GET запрос

```ip-address-PC:8033/reboot```

Для загрузки программы Resolume Arena 6 отправить GET запрос

```ip-address-PC:8033/resolume/load```

Для для запуска сцены номер n (допустимое n от 1 до 8) в программе Resolume Arena 6 отправить GET запрос

```ip-address-PC:8033/resolume/scene2```
