# Beep Boop
#### An interactive robot text generator 12/01/2017
#### by _**Aaron Ross**_

## Description

This web based function will take a user's integer input and return and array of values that have been altered by the robot living within the webpage.

## Setup/Installation Requirements

* Download or clone this repository
* open index.html in the web browser of your choice
* begin!

## Support and Contact Info

If you have any questions or concerns please contact me via email: ashmortar@gmail.com

## Technologies Used

* HTML
* CSS
* JavaScript
* Bootstrap
* jQuery

## Website on gh-pages

http://ashmortar.github.io/boop-beep

### Specs

|Behaviour    |input    | output    |
|-------------|:-------:|----------:|
|it can count up to the number provided and return those numbers| 5| [0, 1, 2, 3, 4, 5]\
|can replace 1 with _"boop!"_| 1 | [0, _"boop!"_]|
|can replace 0 with _"beep!"_| 0 | _"beep!"_|
|can replace all numbers containing a 1 with _"boop!"_| 11 | [_"beep!"_, _"boop!"_, 2, 3, 4, 5, 6, 7, 8, 9, _"boop!"_, _"boop!"_}|
|can replace all numbers containing a 0 with _"beep!"_| 10 |[_"beep!"_, _"boop!"_, 2, 3, 4, 5, 6, 7, 8, 9, _"beep!"_]|
|numbers divisible by 3 are replaced with _"I'm sorry Dave. I'm afraid I can't do that."_| 13 | [_"beep!"_, _"boop!"_], 2, _"I'm sorry Dave. I'm afraid I can't do that."_, 4, 5, _"I'm sorry Dave. I'm afraid I can't do that."_, 7, 8, _"I'm sorry Dave. I'm afraid I can't do that."_, _"beep!"_, _"boop!"_, _"I'm sorry Dave. I'm afraid I can't do that."_, _"boop!"_|


## License and Copyright

Copyright 2017 Aaron Ross
