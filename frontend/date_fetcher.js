const DateData = fetch("http://localhost:3000/api/v1/Date")
        .then((r) => r.json())
        .then((data) => console.log(data))
        .catch((e) =>  console.log(e));