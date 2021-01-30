The bug is that `num1` and `num2` are passed to `calculateSum()` as strings, so they get concatenated instead of added like numbers. To fix this, I would typecast both `num1` and `num2` to numbers before adding them together.

1. citylots.json
2. part2.js
3. 11.7 MB
4. 68 ms
5. Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.104 Safari/537.36
6. Apache
7. Tue, 26 Jan 2021 22:14:13 GMT
8. application/json
9. `fetchData`