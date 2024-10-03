---
title: 'Context : What is it ?'
excerpt: "#Go #CS"
coverImage: '/postImg/Context.png'
date: '2024-04-10T15:35:07.322Z'
author:
  name: Julien
  picture: '/assets/pictures/julien.png'
ogImage:
  url: '/postImg/Context.png'
tag: '/projects/context'
---

Every Go developers will tell you, the context package from the standard library should always be used to solve tons of problem.
I wanted to know more about this feature, I watched a video about this on YouTube from [Anthony GG](https://www.youtube.com/watch?v=kaZOXRqFPCw).

## Context with time out

His code is mocking a program fetching user data from a third-party API, and the problem is that we don't know how much time it will take. But with the context, you can allow a maximum amount of time to wait for a response to this request.
And it's not that complicated, and according to me, it should be used every time when we don't want to wait forever for a response.

``` go
	func fetchUserData(ctx context.Context, userID int) (int, error) {
	ctx, cancel := context.WithTimeout(ctx, time.Millisecond * 200)
	defer cancel()
```

First, you need to define a context.Background() beforehand, and then you'll send it to this function fetchUserData. In this function, you create another context, but with a timeout and the maximum time you want to wait for a response.

The cancel is mandatory, so don't forget to defer it, or you may have a context leak.
Then, the best thing to do is to call the fetch data function in a goroutine and wait for a response or the maximum time defined. To do so, you need to create a channel to wait for a possible answer.

```go
	respch := make(chan Response)

	go func() {
		val, err := fetchDataFromThirdPartyThatCanBeSlow()
		respch <- Response{
			val,
			err,
		}
	}()
```

Then, there is just to wait for something to be done in a for - select. In the first case, the context created previously is done; we don't want to wait anymore, so we raise an error. Or we have an answer from the channel, which is perfect; we return the data, and we didn't waste time.

```go 
	for {
		select {
		case <-ctx.Done():
			return 0, fmt.Errorf("fetching took too long")
		case resp := <-respch:
			return resp.value, resp.err
		}
	}
```

## Context with value

You can also use the context to pass key-value pairs through a call chain. You can do it this way with the context.WithValue.

```go
ctx := context.Background()  
ctx = context.WithValue(ctx, "AuthToken", "X@cfs645JHSDcdae")
processSensitiveData(ctx)


func processSensitiveData(ctx context.Context) {  
    authToken, ok := ctx.Value("AuthToken").(string)
    [...]
}
```

This could help with sharing redondant variables through your functions without having all them explicitly in the prototypes of the functions, but in the context.

## Context with cancelation

The context package offers the possibility to cancel operations manually after a specific event.

```go
	ctx := context.Background()  
	ctx, cancel := context.WithCancel(ctx)
	
	// The cancel variable will allow us to warn running code from another routine
	// that we want to cancel it now.
	
	// [...] specific event, and now we want to cancel
	
	cancel()
```
After the cancel function is called, functions from other routines will need to check for errors in the context, and if there is one, cancel the process

```go
func processOrder(ctx context.Context) {  
  
    fmt.Println("Processing order...")  
    time.Sleep(1 * time.Second)  
  
    GetOderDetails(ctx)  
    // Check if cancelation signal received  
    if ctx.Err() != nil {  
       fmt.Println("Canceled: Processing order")  
       return  
    }  
}
```

This can be very useful in a concurrency programming context to stop goroutines that we don't want running anymore

## Context in a job interview

This question is frequently asked regarding this feature of Go; what provides the context package, and how to use it ? With this post, I think I'm much more prepared to answer this question than before!
