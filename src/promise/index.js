const somethingWillHappen = () => {
    return new Promise((res,rej) => {
        if(true){
            res('Hey!');
        } else {
            rej('Whooooops!');
        }
    })
};

somethingWillHappen()
    .then(res => console.log(res))
    .catch(error => console.log(error)); 