class User {
    username;
    email;
    password

    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
    setUsername(name){
        this.username=name;
    }
    getUsername(){
        return this.username;
    }
    setEmail(email){
        this.email=email;
    }
    getEmail(){
        return this.email;
    }getUsername
    setPassword(password){
        this.password=password;
    }
    getPassword(){
        return this.password;
    }
}
