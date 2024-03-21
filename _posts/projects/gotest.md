---
title: 'Go test'
excerpt: "But today I decided to upgrade my tests skills with Go and the package testing."
coverImage: '/postImg/gotest.png'
date: '2024-03-22T05:35:07.322Z'
author:
  name: Julien Garsia
  picture: '/assets/pictures/julien.png'
ogImage:
  url: '/postImg/gotest.png'
tag: '/projects/gotest'
---
Testing is primordial in software engineering. No one will tell you otherwise, but if you ask the young generation of software engineer about uni testing, most of them didn't test their applications. Always for good reasons, in my case, I always rather functional testing to test that everything work well in my app.

But today I decided to upgrade my tests skills with Go and the package testing.

## The project : Temperature codingame

I chose this coding game, it's pretty basic case, we have a list of temperature, we need to return the temperature closer to 0. There are 2 other specifications.

* If in the list, the closest value to 0 are 2 and -2. The program should return 2.
* If the list is empty, the program should return 0.

## Implementation

It's maybe not the best, but it's mine. We range all over the input, we save the index of lowest AbsoluteValue in `index` and the lower variable stores the lowest temperature. At the end; we return the index of the temperature closer to 0.

I submit this code to Codingame, and it ran its tests, it worked, but I want to build my own test to be 1000% sure.

```go
// temperature.go
func FindClosestTo0(input []string) string {  
    var lower int64 = 100  
    var index int  
  
    if len(input) == 0 {  
       return "0"  
    }  
  
    for it, inputs := range input {  
       t, _ := strconv.ParseInt(inputs, 10, 32)  
       if Abs(t) < lower {  
          lower = Abs(t)  
          index = it  
       } else if Abs(t) == lower && t > 0 {  
          lower = Abs(t)  
          index = it  
       }  
       _ = t  
    }  
    return input[index]  
}
```

## Testing

Testing in Go is very accessible with the native package `testing`. First of all, you need to create a `temperature_test.go` in the same directory of ```temperature.go```. Then you need to `import testing` and define the tests.

```go
type Test struct {  
    in  []string  
    out string  
}

var tests = []Test{  
    {[]string{"8", "22", "-33", "12", "-25", "-3", "-24", "-1"}, "-1"},  
    {[]string{"-8", "-22", "-33", "-12", "-25", "-3", "-24", "-1"}, "-1"},  
    {[]string{"-5", "40", "-2", "-12", "44", "-3", "-24", "-1"}, "-1"},  
    {[]string{"-5", "40", "-2", "-12", "44", "-3", "-24", "-1", "1"}, "1"},  
    {[]string{"-5", "40", "-4", "-12", "44", "-3", "-24", "-3", "3"}, "3"},  
    {[]string{}, "0"},  
}
```

I'll use my structure Test to store all my use case, with the input of the function and the expected result. Then I'll just build a function to range over the test, call my function and TADA 🎉 .

```go
func TestFindClosestTo0(t *testing.T) {  
    for i, test := range tests {  
       closestTo0 := FindClosestTo0(test.in)  
       if closestTo0 != test.out {  
          t.Errorf("#%d: Taille(%s)=%s; attendu %s", i, test.in, closestTo0, test.out)  
       }  
    }  
}
```

Notice that my function's name is "Test" + my function name in my `temperature.go`. This way, go knows which function need to be tested here. To launch the test, you just have to run the `go test` command in your directory.

```zsh
➜ go test
PASS
ok      awesomeProject3/temperature     0.283s
```

This is already a victory, but we can do better. You can run go test with this parameter.

```zsh
➜ go test -coverprofile=coverage.out 
PASS
coverage: 100.0% of statements
ok      awesomeProject3/temperature     0.199s
```

It will create a file coverage.out and you can visualize this other command you will be able to see with ramification of your code is not yet tested if your coverage is lower than 100%

```zsh
➜ go tool cover -html=coverage.out
``` 

You can find my code on my Github here : [https://github.com/Jiplay/codingame](https://github.com/Jiplay/codingame)