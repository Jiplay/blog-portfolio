---
title: 'API with Go 1.22'
excerpt: "Today I wanted to practice what the last Go update brought to the community :  the http/net update that changed quite a bit the way of developing with the standard library"
coverImage: '/postImg/httpnet.png'
date: '2024-03-18T05:35:07.322Z'
author:
  name: Julien
  picture: '/assets/pictures/julien.png'
ogImage:
  url: '/postImg/httpnet.png'
tag: '/projects/httpnet'
---

Today I wanted to practice what the last Go update brought to the community :  the http/net update that changed quite a bit the way of developing with the standard library.

Before this change, I used quite a lot the famework Gin Gonic to develop my APIs, but I wanted to learn what the standard library had to offer.

## First of all, what changed ? 

Before the update, A request like this `GET /posts/234` to get the post with ID 234, was handled by something like this : 

```go
http.HandleFunc("/posts/", handlePost)
```

Nowhere in this code, it's specified that we're expecting a GET method. With Go 1.22, this will continue to work; BUT you could write this instead :

```go
http.HandleFunc("GET /posts/{id}", handlePost2)
```

This will specify that we're expecting a GET header, and an ID after the post. According to the update patch notes, GET will also match HEAD; but all the other methods match exactly (which is true).
In order to get the data stored in the URL, you just have to call the ```PathValue``` method on the Request object.

## Time to update

This update was the occasion for me to update my working environment, after some good time studying at EPITECH & UNICAL. I always had with me my pal Visual Studio Code, very practical for any kind of project, but not very specific. 

Yes I know there are tons of extensions, but for me, the fun part of development is developing, not setting things up.

These days I'm into Go, it's a technology that I like and I want to improve my skills with it, so I searched for an IDE specific for Go. And I found Goland, as a student (yeah, still enjoying those privileges) I activated my Educational pack and I download it.

First things first, I had to find a good theme, and I think I did pretty well by browsing the themes built by the community, I found my old Dracula theme that I used in VSCode and started my 1st project, doing an API REST with JWT & http/net.

## Technical part 

```bash
.
├── README.md
├── go.mod
├── go.sum
├── jwt
│   └── jwt.go
├── main.go
├── routes
│   └── routes.go
└── user
    └── entry.go
```

So I started by working by dividing my code in packages, one for every big subject of the project, 
* JWT, for handling the creation and the validation of the tokens
* Routes, for not having all my logic in the main
* User, to have a structure of data with some methods.

```go
mux.HandleFunc("POST /user", routes.CreateUserEndpoint)  
mux.HandleFunc("GET /user", routes.GetUsersEndpoint)  
mux.HandleFunc("DELETE /user", routes.DeleteUserEndpoint)  
mux.HandleFunc("PUT /user", routes.UpdateUserEndpoint)
```

Then I defined my routes, I really like the way it works, it's more readable for me. I was used to the way Gin intended it and it was not so clear when you had to read a lot of similar endpoints. It's not a dealbreaker, but just a matter of preferences

```go
r.GET("/ping", func(c *gin.Context) {
```


So in my routes, I defined the CreateUserEndpoint, which takes the Name & Age from the body of the request, builds a user and returns a valid JWT.

```go
func CreateUserEndpoint(w http.ResponseWriter, r *http.Request) {  
    log.Printf("Create user")  
    var newUser user.User  
    err := json.NewDecoder(r.Body).Decode(&newUser)  
    if err != nil {  
       http.Error(w, err.Error(), http.StatusBadRequest)  
       return  
    }  
    token := newUser.Create()  
    _, _ = fmt.Fprintf(w, token)  
}
```

With this JWT, we can call another endpoint, DELETE /user, this endpoint will check if this token is valid, if it isn't, you won't be able to delete anything. To do so, you need to get the JWT from the request of the client. Here it's stored in the Header "token", so I fetch it and try to validate it with my function.

```go
clientToken := r.Header.Get("Token")  
_, err := jwt.ValidateToken(clientToken)  
if err != nil {  
    w.WriteHeader(http.StatusUnauthorized)  
    return  
}
```

And I think that's all for this API, with this post, I learned how to : 
*  📍Divide my code in Module
*  📍Work with GoLand
*  📍Develop an API with the latest version of the standard library
*  📍Create and use the methods of a structure in Go
*  📍Work with JWT in Go

And I think that's great ! 

You can find all the code on my Github here : [https://github.com/Jiplay/API](https://github.com/Jiplay/API)