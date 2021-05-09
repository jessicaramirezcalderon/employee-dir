import axios from "axios";


const ApiSearch = () => axios({
    method: 'get',
    url: 'https://randomuser.me/api/?results=30',
    responseType: 'json',
}).then(function (response) {
    // console.log('this is my data' + JSON.stringify(response.data))
    // window.data = response.data;
    let data = response.data;
    // console.log('this is my data' + JSON.stringify(data))

    const userData = data.results.map(({name, email, cell, picture}) => ({
        name: name.first + ' ' + name.last,
        email,
        cell,
        mediumPicture: picture.medium
    }));

    return userData;

});

// apiSearch();




//data.results[0].name
//data.results[0].email
//data.results[0].cell
//data.results[0].picture.thumbnail
//data.results[0].picture.medium



export default ApiSearch;