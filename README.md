# Beep Boop
An interactive robot text generator 12/01/2017






### Specs

|Behaviour    |input    | output    |
|-------------|:-------:|----------:|
|it can count up to the number provided and return those numbers| 5| [0, 1, 2, 3, 4, 5]\
|can replace 1 with _"boop!"_| 1 | [0, _"boop!"_]|
|can replace 0 with _"beep!"_| 0 | _"beep!"_|
|can replace all numbers containing a 1 with _"boop!"_| 11 | [0, _"boop!"_, 2, 3, 4, 5, 6, 7, 8, 9, _"boop!"_, _"boop!"_}|
|can replace all numbers containing a 0 with _"beep!"_| 10 |[_"beep!"_, _"boop!"_, 2, 3, 4, 5, 6, 7, 8, 9, _"beep!"_]|
|numbers divisible by 3 are replaced with _"I'm sorry Dave. I'm afraid I can't do that."_| 13 | [_"beep!"_, _"boop!"_], 2, _"I'm sorry Dave. I'm afraid I can't do that."_, 4, 5, _"I'm sorry Dave. I'm afraid I can't do that."_, 7, 8, _"I'm sorry Dave. I'm afraid I can't do that."_, _"beep!"_, _"boop!"_, _"I'm sorry Dave. I'm afraid I can't do that."_, _"boop!"_|
