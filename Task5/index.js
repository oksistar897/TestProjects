const IMAGE_API_URL = "https://picsum.photos/200/300";
const TEXT_API_URL = "https://dummyapi.io/data/v1/user?limit=10";
let imageElement = document.getElementById("image");
let userInformation = document.getElementById("userInfo");

function myFetch(url, options) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(options ? options.method : "GET", url, true);
        if (url == "https://picsum.photos/200/300") {
            xhr.responseType = "blob";
        } else {
            xhr.setRequestHeader("app-id", "6155fa5472aa4147002c1df3");
        };
        xhr.onload = () => {
            resolve(new Response(xhr.response));
        };
        xhr.send();
    });
}
myFetch(IMAGE_API_URL).then((res) => {
    return res.blob();
}).then((response) => {
    const reader = new FileReader();
    reader.readAsDataURL(response);
    reader.onload = () => {
        insertImage(reader.result);
    };
});

function insertImage(src) {
    imageElement.src = src;
}
myFetch(TEXT_API_URL).then((res) => {
    return res.json();
}).then((response) => {
    response.data.forEach((person) => {
        userInformation.insertAdjacentHTML('beforeend', `<div class="usercard">
			 <img src="${person.picture}" alt="${person.id}">
		    		<p>${person.firstName}</p>
		    		<p>${person.lastName}</p>
		    		<p>${person.title}</p>
		    		<p>${person.id}</p>

			 </div>`);
    });
    console.log(response);
});