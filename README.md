Raspberry Pi Home Automation w/ X10 Controller ( CM15A )
===

Setup 
--- 
```
$ apt-get install update
$ sudo apt-get upgrade
$ sudo apt-get install libusb-1.0-0-dev
$ wget -O mochad.tgz http://sourceforge.net/projects/mochad/files/latest/download
$ tar xf mochad.tgz
$ cd mochad-
$ ./configure
$ make
$ sudo make install
$ npm install
```

Run `node main.js`, navigate to the url `http://localhost:3000/{{channel}}/{{status}}`,
e.x. `http://localhost:3000/a1/on`

Possible combinations are:
* Channel = ( A - P )( 1 - 16 )
* Status = ( on, off )