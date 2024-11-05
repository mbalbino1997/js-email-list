console.log(axios);

axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then((res) => {
        console.log("risposta" , res.data.response);
    })
    .catch((err) => {
        console.log("Qualcosa è andato storto", err);
    })