* Drone build: [![Build Status](http://drone.liinda.ru/api/badges/octomen/thui/status.svg)](http://drone.liinda.ru/octomen/thui)

# Web интерфейс сервиса thupoll

<img src="https://user-images.githubusercontent.com/11353797/57648496-1317e280-75df-11e9-918a-d1b2a71dbda9.png" width=200/>

## Описание
Сервис разделен на две части:
* ``client`` - клиентская часть, написанная с использованим стека ``vue-cli``;
* ``server`` - серверная часть. Раздает результат сборки ``vue-cli-service build`` клиентской части,
представляет из себя ``express`` сервер;

## Разработка
Для начала разработки выполните следующие команды:
```bash
# Установка зависимостей проекта
npm run deps

# Запуск клиентской части в режиме разработки
npm run client:watch
```

Для отладки серверной части следует выполнить
```bash
# Установка зависимостей проекта
npm run deps

# Сборка клиентской части
npm run client:build

# Запуск сервера в watch режиме
npm run server:watch
```

Подробнее про сервер [тут](./server/README.md)
Про клиентскую часть можно прочитать [здесь](./client/README.md)
