#!/bin/sh
udevd --daemon
udevadm trigger

modprobe snd_bcm2835
amixer cset numid=3 1

node index.js
